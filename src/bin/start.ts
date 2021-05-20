#!/usr/bin/env node
'use strict';

import express, {Express} from 'express';
import States from '../lib/states';
import BadgeResponse from '../lib/badge-response';
import {Server} from 'http';


class AppServer {
    static run() {
        new AppServer();
    }

    private app: Express;
    private states: States;
    private server: Server;
    private badges: BadgeResponse;

    constructor() {
        if (!process.env.GITLAB_URL) {
            throw new Error('Unable to start: GITLAB_URL empty');
        }
        if (!process.env.GITLAB_TOKEN) {
            throw new Error('Unable to start: GITLAB_TOKEN empty');
        }

        this.app = express();
        this.states = new States(
            process.env.GITLAB_URL,
            process.env.GITLAB_TOKEN
        );
        this.badges = new BadgeResponse(process.env.BADGE_STYLE || '');

        this.setupRoutes();
        this.states.start();
        this.server = this.app.listen(process.env.PORT || 8888);

        process.on('SIGINT', () => this.stop());
        process.on('SIGTERM', () => this.stop());
    }

    setupRoutes() {
        this.app.get('/ping', (req, res) => {
            res.send('pong');
        });

        this.app.get('/cache', (req, res) => {
            res.send(this.states.getCachedStates());
        });

        this.app.get('/:projectId/:branch/build', async (req, res) => {
            const label = 'Build';
            let result;

            try {
                result = await this.states.getState(req.params.projectId, req.params.branch);
            }
            catch(error) {
                this.badges.sendError(res, label);
                return;
            }

            if (['running', 'pending'].indexOf(result.status) > -1) {
                this.badges.send(res, label, status, 'lightgrey');
            }
            else if (result.status === 'success') {
                this.badges.send(res, label, 'passing', 'brightgreen');
            }
            else {
                this.badges.sendError(res, label, result.status);
            }
        });

        this.app.get('/:projectId/:branch/coverage', async (req, res) => {
            const label = 'Coverage';
            let result;

            try {
                result = await this.states.getState(req.params.projectId, req.params.branch);
            }
            catch(error) {
                this.badges.sendError(res, label);
                return;
            }

            if(!result.coverage) {
                this.badges.sendError(res, label);
                return;
            }

            const value = parseFloat(result.coverage);
            let valueString = value.toFixed(2) + '%';
            if (value === 100) {
                valueString = '100%';
            }

            this.badges.send(res, 'Coverage', valueString, this.getColor(value));
        });
    }

    getColor(coverage: number) {
        const colors = new Map([
            [100, 'brightgreen'],
            [95, 'brightgreen'],
            [85, 'green'],
            [70, 'yellowgreen'],
            [50, 'yellow'],
            [25, 'orange'],
            [10, 'red']
        ]);

        for(const [min, minColor] of colors) {
            if(coverage >= min) {
                return minColor;
            }
        }

        return 'red';
    }

    async stop() {
        await new Promise(cb => this.server.close(cb));
        this.states.stop();
        process.exit();
    }
}

AppServer.run();
