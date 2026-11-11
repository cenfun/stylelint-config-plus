import assert from 'node:assert/strict';
import path from 'node:path';
import { createRequire } from 'node:module';
import { describe, it } from 'node:test';
import stylelint from 'stylelint';
import html from 'stylelint-config-html';
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
const warnings = (result) => result.results.flatMap((item) => item.warnings);

// The recommended newline policy should follow the configured declaration
// limit, rather than forcing every single-line block to expand.
const withDeclarationLimit = (config, limit) => {
    const rules = {
        '@stylistic/declaration-block-single-line-max-declarations': limit,
        '@stylistic/scss/declaration-block-single-line-max-declarations': limit
    };
    return {
        ... config,
        rules: {
            ... config.rules, ... rules
        },
        overrides: config.overrides.map((override) => ({
            ... override,
            rules: {
                ... override.rules, ... rules
            }
        }))
    };
};

describe('recommended formatting and legacy compatibility', {
    timeout: 30000
}, () => {
    it('uses the upstream plugin and recommended newline settings without wrappers', () => {
        const ruleName = '@stylistic/declaration-block-semicolon-newline-after';
        assert.deepEqual(source.plugins, ['@stylistic/stylelint-plugin', 'stylelint-order']);
        assert.deepEqual(source.rules[ruleName], stylistic.rules[ruleName]);
        assert.equal(source.rules[ruleName][0], 'always-multi-line');
        assert.equal(source.rules['declaration-property-value-no-unknown'], true);
    });

    it('covers every embedded syntax override from stylelint-config-html', () => {
        for (const override of html.overrides) {
            const configured = source.overrides.find((item) => JSON.stringify(item.files) === JSON.stringify(override.files));
            assert.ok(configured, JSON.stringify(override.files));
            assert.equal(configured.rules['@stylistic/scss/indentation'], 4);
        }
    });

    for (const [entry, config] of [['ESM', plus], ['CommonJS', commonjs]]) {
        for (const extension of ['htm', 'shtml', 'xhtml', 'ejs', 'svelte', 'astro']) {
            it(`${entry} still formats SCSS embedded in .${extension}`, async () => {
                const result = await lint(config,
                    '<style lang="scss">.my-class{width:10px;position:absolute}</style>',
                    `embedded.${extension}`);
                assert.equal(result.errored, false, JSON.stringify(warnings(result)));
                assert.match(result.code, /\n {4}position: absolute;\n {4}width: 10px;/);
                for (const item of result.results) {
                    assert.deepEqual(item.invalidOptionWarnings, []);
                    assert.deepEqual(item.deprecations, []);
                }
            });
        }

        for (const extension of ['css', 'scss', 'html', 'vue']) {
            it(`${entry} follows the recommended newline policy in .${extension} blocks`, async () => {
                const embedded = ['html', 'vue'].includes(extension);
                const rule = '.my-class { width: 10px; color: red; }';
                const code = embedded ? `<style lang="scss">${rule}</style>` : rule;
                const ruleName = extension === 'css' ? '@stylistic/declaration-block-semicolon-newline-after' : '@stylistic/scss/declaration-block-semicolon-newline-after';
                for (const limit of [2, null]) {
                    const custom = withDeclarationLimit(config, limit);
                    const checked = await lint(custom, code, `semicolons.${extension}`, false);
                    assert.ok(!warnings(checked).some((warning) => warning.rule === ruleName), JSON.stringify(warnings(checked)));
                    const fixed = await lint(custom, code, `semicolons.${extension}`);
                    assert.equal(fixed.errored, false, JSON.stringify(warnings(fixed)));
                    assert.match(fixed.code, /width: 10px; color: red;/);
                }
            });
        }

        for (const extension of ['css', 'scss', 'html', 'vue']) {
            it(`${entry} retains property-value validation for v-bind in .${extension}`, async () => {
                const rule = '.my-class { color: v-bind(color); }';
                const code = ['html', 'vue'].includes(extension) ? `<style>${rule}</style>` : rule;
                const result = await lint(config, code, `values.${extension}`, false);
                assert.ok(warnings(result).some((warning) => warning.rule === 'declaration-property-value-no-unknown'));
                assert.ok(!warnings(result).some((warning) => warning.rule === 'function-no-unknown'));
            });
        }

        it(`${entry} preserves non-always options and disableFix`, async () => {
            const ruleName = '@stylistic/declaration-block-semicolon-newline-after';
            const isolated = {
                plugins: config.plugins,
                rules: {
                    [ruleName]: 'always-multi-line'
                }
            };
            const code = '.my-class { width: 10px; color: red; }';
            const unchanged = await lint(isolated, code, 'single-line.css');
            assert.equal(unchanged.errored, false);
            assert.equal(unchanged.code, code);
            const noFix = await lint({
                ... isolated,
                rules: {
                    [ruleName]: ['always', {
                        disableFix: true, severity: 'warning'
                    }]
                }
            }, code, 'no-fix.css');
            assert.equal(noFix.code, code);
            assert.ok(warnings(noFix).some((warning) => warning.rule === ruleName && warning.severity === 'warning'));
        });

        it(`${entry} respects disabled semicolon rules`, async () => {
            const ruleName = '@stylistic/declaration-block-semicolon-newline-after';
            const isolated = {
                plugins: config.plugins,
                rules: {
                    [ruleName]: 'always'
                }
            };
            const disabled = `/* stylelint-disable ${ruleName} */\n.my-class { width: 10px; color: red; }`;
            const result = await lint(isolated, disabled, 'disabled.css');
            assert.equal(result.errored, false);
            assert.match(result.code, /width: 10px; color: red;/);

        });
    }
});
