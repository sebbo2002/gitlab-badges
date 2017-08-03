'use strict';

if (!process.env.GITLAB_URL) {
	throw new Error('Unable to start: GITLAB_URL empty');
}
if (!process.env.GITLAB_TOKEN) {
	throw new Error('Unable to start: GITLAB_TOKEN empty');
}

const express = require('express');
const States = require('./lib/states.js');
const BadgeResponse = require('./lib/badgeResponse.js');
const states = new States(process.env.GITLAB_URL, process.env.GITLAB_TOKEN);
const app = express();

app.get('/ping', function (req, res) {
	res.send('pong');
});

app.get('/cache', function (req, res) {
	res.send(states.getCachedStates());
});

app.get('/:projectId/:branch/build', function (req, res) {
	states.getState(req.params.projectId, function (error, result) {
		const img = new BadgeResponse(res, 'build');
		const status = result[req.params.branch].status;
		if (error || !status) {
			img.sendError();
			return;
		}

		if (['running', 'pending'].indexOf(status) > -1) {
			img.send(status, 'lightgrey');
		}
		else if (status === 'success') {
			img.send('passing', 'brightgreen');
		}
		else {
			img.sendError(status);
		}
	});
});

app.get('/:projectId/:branch/coverage', function (req, res) {
	states.getState(req.params.projectId, function (error, result) {
		const img = new BadgeResponse(res, 'coverage');
		const coverage = result[req.params.branch].coverage;
		if (error || !coverage) {
			img.sendError();
			return;
		}

		if (coverage === 100) {
			img.send('100%', 'brightgreen');
		}
		else if (coverage >= 95) {
			img.send(parseFloat(coverage).toFixed(2) + '%', 'brightgreen');
		}
		else if (coverage >= 85) {
			img.send(parseFloat(coverage).toFixed(1) + '%', 'green');
		}
		else if (coverage >= 70) {
			img.send(parseFloat(coverage).toFixed(1) + '%', 'yellowgreen');
		}
		else if (coverage >= 50) {
			img.send(parseFloat(coverage).toFixed(1) + '%', 'yellow');
		}
		else if (coverage >= 25) {
			img.send(parseFloat(coverage).toFixed(1) + '%', 'orange');
		}
		else if (coverage >= 10) {
			img.send(parseFloat(coverage).toFixed(1) + '%', 'red');
		}
		else {
			img.send(parseFloat(coverage).toFixed(2) + '%', 'red');
		}
	});
});

app.listen(process.env.PORT || 8888);
