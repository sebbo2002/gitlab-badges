'use strict';

function GitLabStateHelper (url, token) {
	const tinyreq = require('tinyreq');
	const asyncMap = require('async.map');
	const cache = {};
	let timeout;

	this.getState = function (projectId, cb) {
		projectId = parseInt(projectId, 10);
		if (cache[projectId]) {
			cache[projectId].lastHit = new Date().getTime();
			cb(null, cache[projectId].pipelines);
			return;
		}

		this.refreshState(projectId, cb);
	};
	this.getCachedStates = function () {
		return cache;
	};

	this.refreshState = function (projectId, cb) {
		const b = this;
		projectId = parseInt(projectId, 10);

		b.request('/projects/' + projectId + '/pipelines?scope=branches', function (err, body) {
			if (err && cb) {
				return cb(err);
			}
			else if (err) {
				console.log(err);
				return;
			}

			let cacheDuration = 5;
			const result = {};

			asyncMap(body, function (pipeline, cb) {
				if (['running', 'pending'].indexOf(pipeline.status) > -1) {
					cacheDuration = 0.5;
				}
				if (['failed', 'canceled'].indexOf(pipeline.status) > -1) {
					cacheDuration = Math.min(cacheDuration, 2);
				}

				b.request('/projects/' + projectId + '/pipelines/' + pipeline.id, function (err, extendedPipeline) {
					result[pipeline.ref] = {
						status: pipeline.status,
						coverage: !err && extendedPipeline ? extendedPipeline.coverage : null
					};

					cb();
				});
			}, function () {
				cache[projectId] = {
					lastSync: new Date().getTime(),
					lastHit: cache[projectId] ? cache[projectId].lastHit : new Date().getTime(),
					validTill: new Date().getTime() + (1000 * 60 * cacheDuration),
					pipelines: result
				};
				b.refresNextState();

				cb(null, result);
			});
		});
	};

	this.request = function (path, cb) {
		tinyreq({
			url: url + '/api/v4' + path,
			headers: {
				'PRIVATE-TOKEN': token
			}
		}, function (err, body) {
			if (err) {
				return cb(err);
			}

			try {
				body = JSON.parse(body);
			}
			catch (err) {
				return cb(err);
			}

			cb(null, body);
		});
	};

	this.refresNextState = function () {
		const b = this;
		const now = new Date().getTime();
		let count = 0;
		let when = 120000;
		let mostUnused;
		let inms;

		b.stop();

		for (let i in cache) {
			if (cache.hasOwnProperty(i)) {
				inms = cache[i].validTill - now;
				count += 1;

				if (cache[i].validTill <= now) {
					b.refreshState(i);
				}
				else if (inms < when) {
					when = inms;
				}

				if (!mostUnused || cache[i].lastHit < cache[mostUnused].lastHit) {
					mostUnused = i;
				}
			}
		}

		if (count > (parseInt(process.env.MAX_CACHE_SIZE, 10) || 50)) {
			delete cache[mostUnused];
		}

		timeout = setTimeout(function () {
			b.refresNextState();
		}, when);
	};

	this.start = function () {
		if (!timeout) {
			this.refresNextState();
		}
	};
	this.stop = function () {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	};

	this.start();
}

module.exports = GitLabStateHelper;
