'use strict';

import { makeBadge } from 'badge-maker';
import { Response } from 'express';
import { Style } from './types.js';

export default class BadgeResponse {
    private readonly style: Style = 'plastic';

    constructor (style: string) {
        const myStyle = style || process.env.BADGE_STYLE || '';
        if (myStyle || ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'].includes(myStyle)) {
            this.style = myStyle as Style;
        }
    }

    sendBadge (res: Response, badge: string): void {
        if (!badge) {
            res.sendStatus(404);
            return;
        }

        res.set('Content-Type', 'image/svg+xml');
        res.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.set('Expires', '-1');
        res.set('Pragma', 'no-cache');
        res.send(badge);
    }

    sendError (res: Response, label: string, error?: string | unknown): void {
        this.sendBadge(res, makeBadge({
            label,
            message: String(error) || 'error',
            color: 'red',
            style: this.style
        }));
    }

    send (res: Response, label: string, value: string, color: string): void {
        this.sendBadge(res, makeBadge({
            label,
            message: value || '-',
            color: color,
            style: this.style
        }));
    }
}
