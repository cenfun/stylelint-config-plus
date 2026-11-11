# stylelint-config-plus

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin) 
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html) (*.html, *.vue and so on)

## Install
```sh
npm i stylelint@^18 stylelint-config-plus -D
```

Requires Stylelint 18 and Node.js `^22.22.2 || ^24.15.0 || >=26.0.0`.
Version 1.3 updates the recommended/standard rules and Stylistic 6 settings, so lint results and autofixes may change.

## Usage
### ESM
```js
// stylelint.config.js
export default {
    extends: ['stylelint-config-plus']
};
```

### CommonJS
```js
// stylelint.config.cjs
module.exports = {
    extends: ['stylelint-config-plus']
};
```

### CSS, SCSS, HTML and Vue
CSS works out of the box. SCSS uses the bundled `postcss-scss` parser and the
`@stylistic/scss/` rules. Every file type supported by `stylelint-config-html`
(including HTML, Vue, Svelte, Astro and HTML template extensions) also enables
these rules for `<style lang="scss">` blocks. Both CSS and SCSS use four-space indentation.
When overriding SCSS formatting rules, use the `@stylistic/scss/` namespace,
for example `'@stylistic/scss/indentation': 2`.
The existing `function-no-unknown` exception for Vue `v-bind()` and the `:deep()`/
`:global()` exceptions remain unchanged. As before, `declaration-property-value-no-unknown`
can still reject `v-bind()` where a CSS property value cannot be validated.

CSS/SCSS uses the upstream recommended newline rules without a custom plugin
wrapper. `@stylistic/declaration-block-semicolon-newline-after` uses the recommended
`always-multi-line` setting: single-line `style` attributes stay on one line,
while attributes already spanning multiple lines have a newline after each
semicolon between declarations. Ordinary blocks with multiple declarations are
expanded by the recommended `@stylistic/declaration-block-single-line-max-declarations: 1`.
If that limit is increased or disabled, single-line blocks are allowed to remain
single-line; the previous `always` override is no longer applied.
Embedded HTML styles may need an additional `stylelint --fix` pass when
declaration ordering also changes.

## Development
```sh
npm install
npm run lint
npm test
```

`npm test` builds the package, then runs the Node.js test runner through `mcr test`.
Coverage options and test targets are configured in `mcr.config.js`. The V8 HTML
report is written to `.temp/coverage-reports/index.html`, with a coverage summary
in the terminal. To run tests directly after building, use `npx mcr test`.

# Rules
{replace_holder_rules}

# Changelog
[CHANGLOG.md](CHANGLOG.md)