'use strict';

function BadgeResponse (res, label) {
	const badge = require('gh-badges');

	let template = process.env['BADGE_STYLE'];
	if (['default', 'flat-square', 'flat', 'plastic', 'social'].indexOf(template) === -1) {
		template = 'default';
	}

	this.sendError = function (error) {
		const b = this;

		badge({
			text: [label, error || 'error'],
			format: 'svg',
			colorscheme: 'red',
			template: template
		}, b.sendBadge);
	};

	this.send = function (value, color) {
		const b = this;

		badge({
			text: [label, value || '-'],
			format: 'svg',
			colorscheme: color,
			template: template
		}, b.sendBadge);
	};

	this.sendBadge = function (badge) {
		if (!badge) {
			res.sendStatus(404);
			return;
		}

		res.set('Content-Type', 'image/svg+xml');
		res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
		res.set('Expires', '-1');
		res.set('Pragma', 'no-cache');
		res.send(badge);
	};
}

module.exports = BadgeResponse;
