import assert from 'node:assert/strict';
import {
    before, describe, it
} from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import stylelint from 'stylelint';

const originalDir = path.resolve(import.meta.dirname, 'original');
const formattedDir = path.resolve(import.meta.dirname, 'formatted');
const snapshots = fs.readdirSync(originalDir).map((txtName) => {
    const filename = txtName.slice(0, -4);
    return {
        originalPath: path.join(originalDir, txtName),
        savePath: path.join(formattedDir, filename),
        snapPath: path.resolve(import.meta.dirname, 'snapshot', filename)
    };
});

const readContent = (filename) => fs.readFileSync(filename, 'utf8').replace(/\r\n/g, '\n');
const lint = async () => {
    const result = await stylelint.lint({
        files: snapshots.map((item) => item.savePath),
        configFile: path.resolve('stylelint.config.js'),
        fix: true
    });
    assert.equal(result.errored, false, JSON.stringify(result.results.map(({ warnings }) => warnings), null, 2));
    for (const item of result.results) {
        assert.deepEqual(item.invalidOptionWarnings, []);
        assert.deepEqual(item.deprecations, []);
    }
};

describe('formatting fixtures', {
    timeout: 30000, concurrency: false
}, () => {
    let formatted;

    before(() => {
        fs.mkdirSync(formattedDir, {
            recursive: true
        });
        for (const item of snapshots) {
            fs.copyFileSync(item.originalPath, item.savePath);
        }
    });

    it('formats CSS, SCSS, HTML and Vue without configuration warnings', async () => {
        await lint();
    });

    it('finishes formatting embedded HTML styles on the second pass', async () => {
        // postcss-html and the ordering plugin can require a second fix pass.
        await lint();
        formatted = snapshots.map((item) => readContent(item.savePath));
    });

    it('is stable after formatting', async () => {
        await lint();
        assert.deepEqual(snapshots.map((item) => readContent(item.savePath)), formatted);
    });

    it('matches the reviewed snapshots', () => {
        for (const item of snapshots) {
            assert.equal(readContent(item.savePath), readContent(item.snapPath), item.savePath);
        }
    });
});
