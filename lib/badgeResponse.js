'use strict';

function BadgeResponse (res, label) {
    const {BadgeFactory} = require('gh-badges');
    const badgeFactory = new BadgeFactory();

    let template = process.env.BADGE_STYLE;
    if (['default', 'flat-square', 'flat', 'plastic', 'social'].indexOf(template) === -1) {
        template = 'default';
    }

    this.sendError = function (error) {
        this.sendBadge(
            badgeFactory.create({
                text: [label, error || 'error'],
                format: 'svg',
                colorscheme: 'red',
                template: template
            })
        );
    };

    this.send = function (value, color) {
        this.sendBadge(
            badgeFactory.create({
                text: [label, value || '-'],
                format: 'svg',
                colorscheme: color,
                template: template
            })
        );
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
