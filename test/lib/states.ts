'use strict';

import States from '../../src/lib/states';
import assert = require('assert');
import GitLabStateHelper from '../../src/lib/states';

const projectId = process.env.GITLAB_TEST_PROJECT;

describe('States', function () {
    describe('constructor()', function () {
        it('should throw an error with invalid url', function() {
            assert.throws(() => {
                new GitLabStateHelper('ftp://foo.bar', '****');
            }, /Invalid url!/);
        });
        it('should throw an error without token', function() {
            assert.throws(() => {
                new GitLabStateHelper('http://localhost', '****');
            }, /Invalid token!/);
        });
    });

    describe('getState()', function() {
        this.timeout(5000);
        it('should work', projectId ? async function() {
            const states = await new GitLabStateHelper();

            const result1 = await states.getState(projectId, 'develop');
            assert.strictEqual(typeof result1.status, 'string');
            assert.ok(typeof result1.coverage === 'string' || result1.coverage === undefined);

            const result2 = await states.getState(projectId, 'develop');
            assert.strictEqual(result2.status, result1.status);
            assert.strictEqual(result2.coverage, result1.coverage);
        } : () => Promise.resolve());
    });
});
