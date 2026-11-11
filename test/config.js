import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import path from 'node:path';
import { createRequire } from 'node:module';
import stylelint from 'stylelint';
import recommended from 'stylelint-config-recommended';
import standard from 'stylelint-config-standard';
import stylistic from '@stylistic/stylelint-config';
import plus from 'stylelint-config-plus';
import source from '../src/index.js';

const require = createRequire(import.meta.url);
const commonjs = require('stylelint-config-plus');
const lint = (config, code, filename, fix = true) => stylelint.lint({
    config: {
        ... config, fix
    },
    code,
    codeFilename: path.resolve('test', filename),
    fix
});

describe('published configuration', {
    timeout: 30000
}, () => {

    it('exports equivalent ESM, CommonJS and source configurations', () => {
        // Functions are bundled independently, so compare their serialized settings.
        assert.equal(JSON.stringify(plus), JSON.stringify(source));
        assert.equal(JSON.stringify(commonjs), JSON.stringify(source));
        for (const config of [plus, commonjs]) {
            assert.equal(config.rules['selector-class-pattern'][1].message('BadName'),
                'Expected class selector "BadName" to be kebab-case');
        }
    });

    it('includes the latest upstream rules unless explicitly overridden', () => {
        for (const upstream of [recommended, standard, stylistic]) {
            for (const [name, value] of Object.entries(upstream.rules)) {
                assert.ok(Object.hasOwn(plus.rules, name), name);
                if (!['font-family-no-missing-generic-family-keyword',
                      'function-no-unknown',
                      'selector-pseudo-class-no-unknown',
                      'at-rule-no-unknown',
                      '@stylistic/indentation'].includes(name)) {
                    assert.equal(JSON.stringify(plus.rules[name]), JSON.stringify(value), name);
                }
            }
        }
    });

    for (const [entry, config] of [['ESM', plus], ['CommonJS', commonjs]]) {
        for (const filename of ['inline.html', 'inline.vue']) {
            it(`${entry} preserves and formats multi-line ${filename} style attributes`, async () => {
                let code = '<template><div style="display:block;\nwidth:100%;color:red"></div></template>';
                for (let pass = 0; pass < 3; pass += 1) {
                    const result = await lint(config, code, filename);
                    assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
                    const attribute = result.code.match(/style="([^"]*)"/);
                    assert.ok(attribute);
                    assert.match(attribute[1], /display: block;\r?\n\s*width: 100%;\r?\n\s*color: red;/);
                    if (pass > 0) {
                        assert.equal(result.code, code);
                    }
                    code = result.code;
                }
            });

            it(`${entry} keeps ${filename} style attributes on one line`, async () => {
                let code = '<template><div style="color:red;display:block; width:100%"></div></template>\n'
                    + '<style>.my-class{width:10px;position:absolute}</style>\n'
                    + '<style lang="scss">.other-class{width:20px;position:relative}</style>';
                for (let pass = 0; pass < 3; pass += 1) {
                    const result = await lint(config, code, filename);
                    assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
                    const attribute = result.code.match(/style="([^"]*)"/);
                    assert.ok(attribute, 'inline style attribute is retained');
                    assert.doesNotMatch(attribute[1], /[\r\n]/);
                    assert.equal(attribute[1], 'display: block; width: 100%; color: red;');
                    if (pass > 0) {
                        assert.match(result.code, /\n {4}position: absolute;\n {4}width: 10px;/);
                        assert.match(result.code, /\n {4}position: relative;\n {4}width: 20px;/);
                    }
                    // Embedded style blocks can need two passes; attributes stay
                    // single-line on every pass and the third pass is stable.
                    if (pass > 1) {
                        assert.equal(result.code, code);
                    }
                    code = result.code;
                }
            });
        }

        for (const [filename, code] of [
            ['style.css', '.my-class{width:10px;position:absolute}'],
            ['style.scss', '$size: 10px;\n.my-class{width:$size;position:absolute}'],
            ['style.html', '<style lang="scss">$size: 10px;\n.my-class{width:$size;position:absolute}</style>'],
            ['style.vue', '<template><div /></template>\n<style lang="scss">$size: 10px;\n.my-class{width:$size;position:absolute}</style>']
        ]) {
            it(`${entry} formats ${filename} with four-space indentation`, async () => {
                const result = await lint(config, code, filename);
                assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
                assert.match(result.code, /\n {4}position: absolute;\n {4}width:/);
                assert.deepEqual(result.results[0].invalidOptionWarnings, []);
                assert.deepEqual(result.results[0].deprecations, []);
                const second = await lint(config, result.code, filename);
                assert.equal(second.code, result.code);
                assert.equal(second.errored, false);
            });
        }
    }

    it('can be resolved through the published package name in extends', async () => {
        const result = await lint({
            extends: ['stylelint-config-plus']
        },
        '.my-class{color:red}',
        'style.css');
        assert.equal(result.errored, false);
        assert.match(result.code, /color: red;/);
    });

    it('still rejects invalid CSS property values', async () => {
        const result = await lint(plus, '.my-class { color: not-a-color; }', 'style.css', false);
        assert.equal(result.errored, true);
        assert.ok(result.results[0].warnings.some((warning) => warning.rule === 'declaration-property-value-no-unknown'));
    });

    it('retains Vue function exceptions, pseudo-classes and SCSS at-rules', async () => {
        const result = await lint(plus,
            '.my-class:deep(.child) { --theme-color: v-bind(color); }\n@use "sass:math";\n',
            'style.scss');
        assert.equal(result.errored, false, JSON.stringify(result.results[0].warnings));
    });
});
