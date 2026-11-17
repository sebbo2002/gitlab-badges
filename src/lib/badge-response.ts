'use strict';

import { makeBadge } from 'badge-maker';
import { type Response } from 'express';

import { type Style } from './types.js';

export default class BadgeResponse {
    private readonly style: Style = 'plastic';

    constructor(style: string) {
        const myStyle = style || process.env.BADGE_STYLE || '';
        if (
            myStyle ||
            [
                'flat',
                'flat-square',
                'for-the-badge',
                'plastic',
                'social',
            ].includes(myStyle)
        ) {
            this.style = myStyle as Style;
        }
    }

    send(res: Response, label: string, value: string, color: string): void {
        this.sendBadge(
            res,
            makeBadge({
                color: color,
                label,
                message: value || '-',
                style: this.style,
            }),
        );
    }

    sendBadge(res: Response, badge: string): void {
        if (!badge) {
            res.sendStatus(404);
            return;
        }

        res.set('Content-Type', 'image/svg+xml');
        res.set(
            'Cache-Control',
            'private, no-cache, no-store, must-revalidate',
        );
        res.set('Expires', '-1');
        res.set('Pragma', 'no-cache');
        res.send(badge);
    }

    sendError(res: Response, label: string, error?: string | unknown): void {
        this.sendBadge(
            res,
            makeBadge({
                color: 'red',
                label,
                message: String(error) || 'error',
                style: this.style,
            }),
        );
    }
}
