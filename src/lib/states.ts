'use strict';

import { type StateCacheItem, type StateCachePipeline } from './types.js';

export default class GitLabStateHelper {
    private cache: Record<string, StateCacheItem> = {};
    private readonly maxCacheSize: number;
    private timeout?: NodeJS.Timeout;
    private readonly token: string;
    private readonly url: string;

    constructor(url?: string, token?: string) {
        this.url = url || process.env.GITLAB_URL || '';
        if (
            typeof this.url !== 'string' ||
            (this.url.substr(0, 7) !== 'http://' &&
                this.url.substr(0, 8) !== 'https://')
        ) {
            throw new Error('Invalid url!');
        }

        this.token = token || process.env.GITLAB_TOKEN || '';
        if (this.token.length < 5) {
            throw new Error('Invalid token!');
        }

        this.maxCacheSize =
            parseInt(process.env.MAX_CACHE_SIZE || '', 10) || 50;
    }

    public getCachedStates(): Record<string, StateCacheItem> {
        return this.cache;
    }

    public async getState(
        projectId: string,
        branch: string,
    ): Promise<StateCachePipeline> {
        if (!this.cache[projectId]?.pipelines[branch]) {
            await this.refreshState(projectId);
        }

        if (this.cache[projectId]?.pipelines[branch]) {
            this.cache[projectId].lastHit = new Date().getTime();
            return this.cache[projectId].pipelines[branch];
        }

        throw new Error('Unable to find branch!');
    }

    public start(): void {
        if (!this.timeout) {
            this.refreshNextState();
        }
    }

    public stop(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }

    protected refreshNextState(): void {
        const now = new Date().getTime();
        let count = 0;
        let when = 120000;
        let mostUnused;
        let inms;

        this.stop();

        for (const i in this.cache) {
            if (Object.prototype.hasOwnProperty.call(this.cache, i)) {
                const item = this.cache[i];
                inms = item.validTill - now;
                count += 1;

                if (item.validTill <= now) {
                    this.refreshState(i).catch(() => {
                        // ignore error
                    });
                } else if (inms < when) {
                    when = inms;
                }

                const mostUsedItem = mostUnused ? this.cache[mostUnused] : null;
                if (
                    !mostUsedItem ||
                    !mostUsedItem.lastHit ||
                    (item.lastHit && item.lastHit < mostUsedItem.lastHit)
                ) {
                    mostUnused = i;
                }
            }
        }

        if (count > this.maxCacheSize && mostUnused) {
            delete this.cache[mostUnused];
        }

        this.timeout = setTimeout(() => this.refreshNextState(), when);
    }

    protected async refreshState(projectId: string): Promise<void> {
        const body = await this.request(
            '/projects/' + projectId + '/pipelines?scope=branches',
        );
        if (!Array.isArray(body)) {
            throw new Error('Unexpected answer from GitLab.');
        }

        let error: unknown;
        let cacheDuration = 5;
        const result: Record<string, StateCachePipeline> = {};
        await Promise.all(
            body.map(async (pipeline) => {
                if (['pending', 'running'].includes(pipeline.status)) {
                    cacheDuration = 0.5;
                }
                if (['canceled', 'failed'].includes(pipeline.status)) {
                    cacheDuration = Math.min(cacheDuration, 2);
                }

                try {
                    const extendedPipeline = (await this.request(
                        '/projects/' + projectId + '/pipelines/' + pipeline.id,
                    )) as { coverage: null | string };
                    result[pipeline.ref] = {
                        coverage: extendedPipeline.coverage || undefined,
                        status: pipeline.status,
                    };
                } catch (err) {
                    error = err;
                    result[pipeline.ref] = {
                        coverage: undefined,
                        status: pipeline.status,
                    };
                }
            }),
        );

        this.cache[projectId] = {
            lastHit: this.cache[projectId]?.lastHit || new Date().getTime(),
            lastSync: new Date().getTime(),
            pipelines: result,
            validTill: new Date().getTime() + 1000 * 60 * cacheDuration,
        };

        if (this.timeout) {
            this.refreshNextState();
        }

        if (error) {
            throw error;
        }
    }

    protected async request(path: string): Promise<unknown> {
        const result = await fetch(this.url + '/api/v4' + path, {
            headers: {
                'PRIVATE-TOKEN': this.token,
            },
        });

        return result.json();
    }
}
