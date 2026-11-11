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
Base on [stylelint@18.0.0](https://github.com/stylelint/stylelint) (11/11/2026)

|   |Rules|Count|   |
|:-:|-----|----:|--:|
|   |All rules|  218|   |
|✔️|Defined in plus|  152|69.7%|
| ❌|Undefined|   66|30.3%|
| ✅|Recommended + Standard|   86|39.4%|
|🔧|Fixable|  107|49.1%|
|🎨|Stylistic|   65|29.8%|

### Details  
|   |Rules|Type|Enabled|Value|
|--:|:----|:---|:-----:|:----|
|  1|[alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`["percentage",{"exceptProperties":["opacity","fill-opacity","flood-opacity","stop-opacity","stroke-opacity"]}]`</details>|
|  2|[annotation-no-unknown](https://stylelint.io/user-guide/rules/annotation-no-unknown)|✅  |  ✔️ |`true`|
|  3|[at-charset-rule-no-invalid](https://stylelint.io/user-guide/rules/at-charset-rule-no-invalid)|✅  |  ✔️ |`true`|
|  4|[at-rule-allowed-list](https://stylelint.io/user-guide/rules/at-rule-allowed-list)|    |   ❌  |     |
|  5|[at-rule-descriptor-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown)|✅  |  ✔️ |`true`|
|  6|[at-rule-descriptor-value-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown)|✅  |  ✔️ |`true`|
|  7|[at-rule-disallowed-list](https://stylelint.io/user-guide/rules/at-rule-disallowed-list)|    |   ❌  |     |
|  8|[at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["blockless-after-same-name-blockless","first-nested"],"ignore":["after-comment"]}]`</details>|
|  9|[at-rule-no-deprecated](https://stylelint.io/user-guide/rules/at-rule-no-deprecated)|✅🔧|  ✔️ |`true`|
| 10|[at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignoreAtRules":["at-root","content","debug","each","else","else if","error","extend","for","forward","function","if","import","include","media","mixin","return","use","warn","while"]}]`</details>|
| 11|[at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 12|[at-rule-prelude-no-invalid](https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid)|✅  |  ✔️ |`[true,{"ignoreAtRules":["media"]}]`|
| 13|[at-rule-property-required-list](https://stylelint.io/user-guide/rules/at-rule-property-required-list)|    |   ❌  |     |
| 14|[block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty)|✅  |  ✔️ |`true`|
| 15|[block-no-redundant-nested-style-rules](https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules)|✅  |  ✔️ |`true`|
| 16|[color-function-alias-notation](https://stylelint.io/user-guide/rules/color-function-alias-notation)|✅🔧|  ✔️ |`"without-alpha"`|
| 17|[color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation)|✅🔧|  ✔️ |`"modern"`|
| 18|[color-hex-alpha](https://stylelint.io/user-guide/rules/color-hex-alpha)|    |   ❌  |     |
| 19|[color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)|✅🔧|  ✔️ |`"short"`|
| 20|[color-named](https://stylelint.io/user-guide/rules/color-named)|    |   ❌  |     |
| 21|[color-no-hex](https://stylelint.io/user-guide/rules/color-no-hex)|    |   ❌  |     |
| 22|[color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex)|    |   ❌  |     |
| 23|[comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["first-nested"],"ignore":["stylelint-commands"]}]`</details>|
| 24|[comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty)|✅  |  ✔️ |`true`|
| 25|[comment-pattern](https://stylelint.io/user-guide/rules/comment-pattern)|    |   ❌  |     |
| 26|[comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)|✅🔧|  ✔️ |`"always"`|
| 27|[comment-word-disallowed-list](https://stylelint.io/user-guide/rules/comment-word-disallowed-list)|    |   ❌  |     |
| 28|[container-name-pattern](https://stylelint.io/user-guide/rules/container-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^(--)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected container name \"${name}\" to be kebab-case\""}]`</details>|
| 29|[custom-media-pattern](https://stylelint.io/user-guide/rules/custom-media-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom media query name \"${name}\" to be kebab-case\""}]`</details>|
| 30|[custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-custom-property","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 31|[custom-property-no-missing-var-function](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function)|✅  |  ✔️ |`true`|
| 32|[custom-property-pattern](https://stylelint.io/user-guide/rules/custom-property-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom property name \"${name}\" to be kebab-case\""}]`</details>|
| 33|[declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties)|✅  |  ✔️ |`true`|
| 34|[declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["consecutive-duplicates-with-different-syntaxes"]}]`</details>|
| 35|[declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties)|✅🔧|  ✔️ |`true`|
| 36|[declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)|✅  |  ✔️ |`true`|
| 37|[declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-declaration","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 38|[declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important)|    |   ❌  |     |
| 39|[declaration-property-custom-property-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-custom-property-allowed-list)|    |   ❌  |     |
| 40|[declaration-property-max-values](https://stylelint.io/user-guide/rules/declaration-property-max-values)|    |   ❌  |     |
| 41|[declaration-property-unit-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list)|    |   ❌  |     |
| 42|[declaration-property-unit-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list)|    |   ❌  |     |
| 43|[declaration-property-value-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list)|    |   ❌  |     |
| 44|[declaration-property-value-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list)|    |   ❌  |     |
| 45|[declaration-property-value-keyword-no-deprecated](https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated)|✅🔧|  ✔️ |`true`|
| 46|[declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown)|✅  |  ✔️ |`true`|
| 47|[display-notation](https://stylelint.io/user-guide/rules/display-notation)|🔧|   ❌  |     |
| 48|[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)|✅🔧|  ✔️ |`"always-where-recommended"`|
| 49|[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)|✅  |  ✔️ |`true`|
| 50|[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)|✅  |  ✔️ |`null`|
| 51|[font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation)|🔧|   ❌  |     |
| 52|[function-allowed-list](https://stylelint.io/user-guide/rules/function-allowed-list)|    |   ❌  |     |
| 53|[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)|✅🔧|  ✔️ |`true`|
| 54|[function-disallowed-list](https://stylelint.io/user-guide/rules/function-disallowed-list)|    |   ❌  |     |
| 55|[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)|    |   ❌  |     |
| 56|[function-name-case](https://stylelint.io/user-guide/rules/function-name-case)|✅🔧|  ✔️ |`"lower"`|
| 57|[function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown)|    |  ✔️ |<details><summary>Details</summary>`[true,{"ignoreFunctions":["v-bind"]}]`</details>|
| 58|[function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)|    |   ❌  |     |
| 59|[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)|✅🔧|  ✔️ |`"always"`|
| 60|[function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list)|    |   ❌  |     |
| 61|[function-url-scheme-disallowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list)|    |   ❌  |     |
| 62|[hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation)|✅🔧|  ✔️ |`"angle"`|
| 63|[import-notation](https://stylelint.io/user-guide/rules/import-notation)|✅🔧|  ✔️ |`"url"`|
| 64|[keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 65|[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)|✅  |  ✔️ |`true`|
| 66|[keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`"percentage-unless-within-keyword-only-block"`</details>|
| 67|[keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected keyframe name \"${name}\" to be kebab-case\""}]`</details>|
| 68|[layer-name-pattern](https://stylelint.io/user-guide/rules/layer-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)([.-][a-z0-9]+)*$",{"message":"(name) => \"Expected layer name \"${name}\" to be kebab-case\""}]`</details>|
| 69|[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-properties"]}]`</details>|
| 70|[lightness-notation](https://stylelint.io/user-guide/rules/lightness-notation)|✅🔧|  ✔️ |`"percentage"`|
| 71|[max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth)|    |   ❌  |     |
| 72|[media-feature-name-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list)|    |   ❌  |     |
| 73|[media-feature-name-disallowed-list](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list)|    |   ❌  |     |
| 74|[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown)|✅  |  ✔️ |`true`|
| 75|[media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 76|[media-feature-name-unit-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list)|    |   ❌  |     |
| 77|[media-feature-name-value-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list)|    |   ❌  |     |
| 78|[media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown)|✅  |  ✔️ |`true`|
| 79|[media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation)|✅🔧|  ✔️ |`"context"`|
| 80|[media-query-no-invalid](https://stylelint.io/user-guide/rules/media-query-no-invalid)|✅  |  ✔️ |`true`|
| 81|[media-type-no-deprecated](https://stylelint.io/user-guide/rules/media-type-no-deprecated)|✅  |  ✔️ |`true`|
| 82|[named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid)|✅  |  ✔️ |`true`|
| 83|[nesting-selector-no-missing-scoping-root](https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root)|✅  |  ✔️ |`true`|
| 84|[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)|✅  |  ✔️ |`true`|
| 85|[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules)|✅  |  ✔️ |`true`|
| 86|[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 87|[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)|✅  |  ✔️ |`true`|
| 88|[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)|✅  |  ✔️ |`true`|
| 89|[no-invalid-position-at-import-rule](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule)|✅  |  ✔️ |`true`|
| 90|[no-invalid-position-declaration](https://stylelint.io/user-guide/rules/no-invalid-position-declaration)|✅  |  ✔️ |`true`|
| 91|[no-irregular-whitespace](https://stylelint.io/user-guide/rules/no-irregular-whitespace)|✅  |  ✔️ |`true`|
| 92|[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)|    |   ❌  |     |
| 93|[no-unknown-custom-media](https://stylelint.io/user-guide/rules/no-unknown-custom-media)|    |   ❌  |     |
| 94|[no-unknown-custom-properties](https://stylelint.io/user-guide/rules/no-unknown-custom-properties)|    |   ❌  |     |
| 95|[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)|✅  |  ✔️ |`4`  |
| 96|[property-allowed-list](https://stylelint.io/user-guide/rules/property-allowed-list)|    |   ❌  |     |
| 97|[property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list)|    |   ❌  |     |
| 98|[property-layout-mappings](https://stylelint.io/user-guide/rules/property-layout-mappings)|🔧|   ❌  |     |
| 99|[property-no-deprecated](https://stylelint.io/user-guide/rules/property-no-deprecated)|✅🔧|  ✔️ |`true`|
|100|[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown)|✅  |  ✔️ |`true`|
|101|[property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|102|[relative-selector-nesting-notation](https://stylelint.io/user-guide/rules/relative-selector-nesting-notation)|🔧|   ❌  |     |
|103|[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always-multi-line",{"except":["first-nested"],"ignore":["after-comment"]}]`</details>|
|104|[rule-nesting-at-rule-required-list](https://stylelint.io/user-guide/rules/rule-nesting-at-rule-required-list)|    |   ❌  |     |
|105|[rule-selector-property-disallowed-list](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list)|    |   ❌  |     |
|106|[selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable)|✅  |  ✔️ |`true`|
|107|[selector-attribute-name-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list)|    |   ❌  |     |
|108|[selector-attribute-operator-allowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list)|    |   ❌  |     |
|109|[selector-attribute-operator-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list)|    |   ❌  |     |
|110|[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)|✅🔧|  ✔️ |`"always"`|
|111|[selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected class selector \"${selector}\" to be kebab-case\""}]`</details>|
|112|[selector-combinator-allowed-list](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list)|    |   ❌  |     |
|113|[selector-combinator-disallowed-list](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list)|    |   ❌  |     |
|114|[selector-disallowed-list](https://stylelint.io/user-guide/rules/selector-disallowed-list)|    |   ❌  |     |
|115|[selector-id-pattern](https://stylelint.io/user-guide/rules/selector-id-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected id selector \"${selector}\" to be kebab-case\""}]`</details>|
|116|[selector-max-attribute](https://stylelint.io/user-guide/rules/selector-max-attribute)|    |   ❌  |     |
|117|[selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class)|    |   ❌  |     |
|118|[selector-max-combinators](https://stylelint.io/user-guide/rules/selector-max-combinators)|    |   ❌  |     |
|119|[selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors)|    |   ❌  |     |
|120|[selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)|    |   ❌  |     |
|121|[selector-max-pseudo-class](https://stylelint.io/user-guide/rules/selector-max-pseudo-class)|    |   ❌  |     |
|122|[selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity)|    |   ❌  |     |
|123|[selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type)|    |   ❌  |     |
|124|[selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal)|    |   ❌  |     |
|125|[selector-nested-pattern](https://stylelint.io/user-guide/rules/selector-nested-pattern)|    |   ❌  |     |
|126|[selector-no-deprecated](https://stylelint.io/user-guide/rules/selector-no-deprecated)|✅🔧|  ✔️ |`true`|
|127|[selector-no-invalid](https://stylelint.io/user-guide/rules/selector-no-invalid)|✅  |  ✔️ |`true`|
|128|[selector-no-qualifying-type](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)|    |   ❌  |     |
|129|[selector-no-unmatchable](https://stylelint.io/user-guide/rules/selector-no-unmatchable)|✅  |  ✔️ |`true`|
|130|[selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|131|[selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation)|✅🔧|  ✔️ |`"complex"`|
|132|[selector-pseudo-class-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list)|    |   ❌  |     |
|133|[selector-pseudo-class-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list)|    |   ❌  |     |
|134|[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignorePseudoClasses":["deep","global"]}]`</details>|
|135|[selector-pseudo-element-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list)|    |   ❌  |     |
|136|[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)|✅🔧|  ✔️ |`"double"`|
|137|[selector-pseudo-element-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list)|    |   ❌  |     |
|138|[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown)|✅  |  ✔️ |`true`|
|139|[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case)|✅🔧|  ✔️ |`"lower"`|
|140|[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-elements"]}]`</details>|
|141|[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)|✅🔧|  ✔️ |`true`|
|142|[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["at-rule-preludes","declaration-values"]}]`</details>|
|143|[syntax-string-no-invalid](https://stylelint.io/user-guide/rules/syntax-string-no-invalid)|✅  |  ✔️ |`true`|
|144|[time-min-milliseconds](https://stylelint.io/user-guide/rules/time-min-milliseconds)|    |   ❌  |     |
|145|[unit-allowed-list](https://stylelint.io/user-guide/rules/unit-allowed-list)|    |   ❌  |     |
|146|[unit-disallowed-list](https://stylelint.io/user-guide/rules/unit-disallowed-list)|    |   ❌  |     |
|147|[unit-layout-mappings](https://stylelint.io/user-guide/rules/unit-layout-mappings)|🔧|   ❌  |     |
|148|[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown)|    |   ❌  |     |
|149|[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case)|✅🔧|  ✔️ |`"lower"`|
|150|[value-keyword-layout-mappings](https://stylelint.io/user-guide/rules/value-keyword-layout-mappings)|🔧|   ❌  |     |
|151|[value-no-invalid](https://stylelint.io/user-guide/rules/value-no-invalid)|✅  |  ✔️ |`true`|
|152|[value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignoreValues":["box","inline-box"]}]`</details>|
|153|[value-type-custom-property-required-list](https://stylelint.io/user-guide/rules/value-type-custom-property-required-list)|    |   ❌  |     |
|154|[@stylistic/at-rule-name-case](https://stylelint-stylistic.github.io/rules/at-rule-name-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|155|[@stylistic/at-rule-name-space-after](https://stylelint-stylistic.github.io/rules/at-rule-name-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|156|[@stylistic/at-rule-semicolon-newline-after](https://stylelint-stylistic.github.io/rules/at-rule-semicolon-newline-after)|🔧🎨|  ✔️ |`["always",{}]`|
|157|[@stylistic/block-closing-brace-empty-line-before](https://stylelint-stylistic.github.io/rules/block-closing-brace-empty-line-before)|🔧🎨|  ✔️ |`["never",{}]`|
|158|[@stylistic/block-closing-brace-newline-after](https://stylelint-stylistic.github.io/rules/block-closing-brace-newline-after)|🔧🎨|  ✔️ |`["always",{}]`|
|159|[@stylistic/block-closing-brace-newline-before](https://stylelint-stylistic.github.io/rules/block-closing-brace-newline-before)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|160|[@stylistic/block-closing-brace-space-before](https://stylelint-stylistic.github.io/rules/block-closing-brace-space-before)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|161|[@stylistic/block-opening-brace-newline-after](https://stylelint-stylistic.github.io/rules/block-opening-brace-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|162|[@stylistic/block-opening-brace-space-after](https://stylelint-stylistic.github.io/rules/block-opening-brace-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|163|[@stylistic/block-opening-brace-space-before](https://stylelint-stylistic.github.io/rules/block-opening-brace-space-before)|🔧🎨|  ✔️ |`["always",{}]`|
|164|[@stylistic/color-hex-case](https://stylelint-stylistic.github.io/rules/color-hex-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|165|[@stylistic/declaration-bang-space-after](https://stylelint-stylistic.github.io/rules/declaration-bang-space-after)|🔧🎨|  ✔️ |`["never",{}]`|
|166|[@stylistic/declaration-bang-space-before](https://stylelint-stylistic.github.io/rules/declaration-bang-space-before)|🔧🎨|  ✔️ |`["always",{}]`|
|167|[@stylistic/declaration-block-semicolon-newline-after](https://stylelint-stylistic.github.io/rules/declaration-block-semicolon-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|168|[@stylistic/declaration-block-semicolon-space-after](https://stylelint-stylistic.github.io/rules/declaration-block-semicolon-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|169|[@stylistic/declaration-block-semicolon-space-before](https://stylelint-stylistic.github.io/rules/declaration-block-semicolon-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|170|[@stylistic/declaration-block-single-line-max-declarations](https://stylelint-stylistic.github.io/rules/declaration-block-single-line-max-declarations)|🔧🎨|  ✔️ |`[1,{}]`|
|171|[@stylistic/declaration-block-trailing-semicolon](https://stylelint-stylistic.github.io/rules/declaration-block-trailing-semicolon)|🔧🎨|  ✔️ |`["always",{}]`|
|172|[@stylistic/declaration-colon-newline-after](https://stylelint-stylistic.github.io/rules/declaration-colon-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|173|[@stylistic/declaration-colon-space-after](https://stylelint-stylistic.github.io/rules/declaration-colon-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|174|[@stylistic/declaration-colon-space-before](https://stylelint-stylistic.github.io/rules/declaration-colon-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|175|[@stylistic/function-comma-newline-after](https://stylelint-stylistic.github.io/rules/function-comma-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|176|[@stylistic/function-comma-space-after](https://stylelint-stylistic.github.io/rules/function-comma-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|177|[@stylistic/function-comma-space-before](https://stylelint-stylistic.github.io/rules/function-comma-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|178|[@stylistic/function-max-empty-lines](https://stylelint-stylistic.github.io/rules/function-max-empty-lines)|🔧🎨|  ✔️ |`[0,{}]`|
|179|[@stylistic/function-parentheses-newline-inside](https://stylelint-stylistic.github.io/rules/function-parentheses-newline-inside)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|180|[@stylistic/function-parentheses-space-inside](https://stylelint-stylistic.github.io/rules/function-parentheses-space-inside)|🔧🎨|  ✔️ |`["never-single-line",{}]`|
|181|[@stylistic/function-whitespace-after](https://stylelint-stylistic.github.io/rules/function-whitespace-after)|🔧🎨|  ✔️ |`["always",{}]`|
|182|[@stylistic/indentation](https://stylelint-stylistic.github.io/rules/indentation)|🔧🎨|  ✔️ |`4`  |
|183|[@stylistic/max-empty-lines](https://stylelint-stylistic.github.io/rules/max-empty-lines)|🔧🎨|  ✔️ |`[1,{}]`|
|184|[@stylistic/max-line-length](https://stylelint-stylistic.github.io/rules/max-line-length)|🎨|  ✔️ |`[120,{}]`|
|185|[@stylistic/media-feature-colon-space-after](https://stylelint-stylistic.github.io/rules/media-feature-colon-space-after)|🔧🎨|  ✔️ |`["always",{}]`|
|186|[@stylistic/media-feature-colon-space-before](https://stylelint-stylistic.github.io/rules/media-feature-colon-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|187|[@stylistic/media-feature-name-case](https://stylelint-stylistic.github.io/rules/media-feature-name-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|188|[@stylistic/media-feature-parentheses-space-inside](https://stylelint-stylistic.github.io/rules/media-feature-parentheses-space-inside)|🔧🎨|  ✔️ |`["never",{}]`|
|189|[@stylistic/media-feature-range-operator-space-after](https://stylelint-stylistic.github.io/rules/media-feature-range-operator-space-after)|🔧🎨|  ✔️ |`["always",{}]`|
|190|[@stylistic/media-feature-range-operator-space-before](https://stylelint-stylistic.github.io/rules/media-feature-range-operator-space-before)|🔧🎨|  ✔️ |`["always",{}]`|
|191|[@stylistic/media-query-list-comma-newline-after](https://stylelint-stylistic.github.io/rules/media-query-list-comma-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|192|[@stylistic/media-query-list-comma-space-after](https://stylelint-stylistic.github.io/rules/media-query-list-comma-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|193|[@stylistic/media-query-list-comma-space-before](https://stylelint-stylistic.github.io/rules/media-query-list-comma-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|194|[@stylistic/no-empty-first-line](https://stylelint-stylistic.github.io/rules/no-empty-first-line)|🔧🎨|  ✔️ |`[true,{}]`|
|195|[@stylistic/no-eol-whitespace](https://stylelint-stylistic.github.io/rules/no-eol-whitespace)|🔧🎨|  ✔️ |`[true,{}]`|
|196|[@stylistic/no-extra-semicolons](https://stylelint-stylistic.github.io/rules/no-extra-semicolons)|🔧🎨|  ✔️ |`[true,{}]`|
|197|[@stylistic/no-missing-end-of-source-newline](https://stylelint-stylistic.github.io/rules/no-missing-end-of-source-newline)|🔧🎨|  ✔️ |`[true,{}]`|
|198|[@stylistic/number-leading-zero](https://stylelint-stylistic.github.io/rules/number-leading-zero)|🔧🎨|  ✔️ |`["always",{}]`|
|199|[@stylistic/number-no-trailing-zeros](https://stylelint-stylistic.github.io/rules/number-no-trailing-zeros)|🔧🎨|  ✔️ |`[true,{}]`|
|200|[@stylistic/property-case](https://stylelint-stylistic.github.io/rules/property-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|201|[@stylistic/selector-attribute-brackets-space-inside](https://stylelint-stylistic.github.io/rules/selector-attribute-brackets-space-inside)|🔧🎨|  ✔️ |`["never",{}]`|
|202|[@stylistic/selector-attribute-operator-space-after](https://stylelint-stylistic.github.io/rules/selector-attribute-operator-space-after)|🔧🎨|  ✔️ |`["never",{}]`|
|203|[@stylistic/selector-attribute-operator-space-before](https://stylelint-stylistic.github.io/rules/selector-attribute-operator-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|204|[@stylistic/selector-combinator-space-after](https://stylelint-stylistic.github.io/rules/selector-combinator-space-after)|🔧🎨|  ✔️ |`["always",{}]`|
|205|[@stylistic/selector-combinator-space-before](https://stylelint-stylistic.github.io/rules/selector-combinator-space-before)|🔧🎨|  ✔️ |`["always",{}]`|
|206|[@stylistic/selector-descendant-combinator-no-non-space](https://stylelint-stylistic.github.io/rules/selector-descendant-combinator-no-non-space)|🔧🎨|  ✔️ |`[true,{}]`|
|207|[@stylistic/selector-list-comma-newline-after](https://stylelint-stylistic.github.io/rules/selector-list-comma-newline-after)|🔧🎨|  ✔️ |`["always",{}]`|
|208|[@stylistic/selector-list-comma-space-before](https://stylelint-stylistic.github.io/rules/selector-list-comma-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|209|[@stylistic/selector-max-empty-lines](https://stylelint-stylistic.github.io/rules/selector-max-empty-lines)|🔧🎨|  ✔️ |`[0,{}]`|
|210|[@stylistic/selector-pseudo-class-case](https://stylelint-stylistic.github.io/rules/selector-pseudo-class-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|211|[@stylistic/selector-pseudo-class-parentheses-space-inside](https://stylelint-stylistic.github.io/rules/selector-pseudo-class-parentheses-space-inside)|🔧🎨|  ✔️ |`["never",{}]`|
|212|[@stylistic/selector-pseudo-element-case](https://stylelint-stylistic.github.io/rules/selector-pseudo-element-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|213|[@stylistic/string-quotes](https://stylelint-stylistic.github.io/rules/string-quotes)|🔧🎨|  ✔️ |`["double",{}]`|
|214|[@stylistic/unit-case](https://stylelint-stylistic.github.io/rules/unit-case)|🔧🎨|  ✔️ |`["lower",{}]`|
|215|[@stylistic/value-list-comma-newline-after](https://stylelint-stylistic.github.io/rules/value-list-comma-newline-after)|🔧🎨|  ✔️ |`["always-multi-line",{}]`|
|216|[@stylistic/value-list-comma-space-after](https://stylelint-stylistic.github.io/rules/value-list-comma-space-after)|🔧🎨|  ✔️ |`["always-single-line",{}]`|
|217|[@stylistic/value-list-comma-space-before](https://stylelint-stylistic.github.io/rules/value-list-comma-space-before)|🔧🎨|  ✔️ |`["never",{}]`|
|218|[@stylistic/value-list-max-empty-lines](https://stylelint-stylistic.github.io/rules/value-list-max-empty-lines)|🔧🎨|  ✔️ |`[0,{}]`|

# Changelog
[CHANGLOG.md](CHANGLOG.md)