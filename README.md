# stylelint-config-plus

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin) 
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html) (*.html, *.vue and so on)

## Install
```sh
npm i stylelint-config-plus -D
```

## Usage
```js
// stylelint.config.js
export default {
    extends: ["stylelint-config-plus"]
};
```

# Rules
Base on [stylelint@16.9.0](https://github.com/stylelint/stylelint) (2024/9/4)  
|   |Rules|Count|   |
|:-:|-----|----:|--:|
|   |All rules|  191|   |
|✔️|Defined in plus|  135|70.7%|
| ❌|Undefined|   56|29.3%|
| ✅|Recommended + Standard|   70|36.6%|
|🔧|Fixable|   95|49.7%|
|🎨|Stylistic|   64|33.5%|

### Details  
|   |Rules|Type|Enabled|Value|
|--:|:----|:---|:-----:|:----|
|  1|[alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`["percentage",{"exceptProperties":["opacity","fill-opacity","flood-opacity","stop-opacity","stroke-opacity"]}]`</details>|
|  2|[annotation-no-unknown](https://stylelint.io/user-guide/rules/annotation-no-unknown)|✅  |  ✔️ |`true`|
|  3|[at-rule-allowed-list](https://stylelint.io/user-guide/rules/at-rule-allowed-list)|    |   ❌  |     |
|  4|[at-rule-disallowed-list](https://stylelint.io/user-guide/rules/at-rule-disallowed-list)|    |   ❌  |     |
|  5|[at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["blockless-after-same-name-blockless","first-nested"],"ignore":["after-comment"]}]`</details>|
|  6|[at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown)|✅  |  ✔️ |`true`|
|  7|[at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|  8|[at-rule-property-required-list](https://stylelint.io/user-guide/rules/at-rule-property-required-list)|    |   ❌  |     |
|  9|[block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty)|✅  |  ✔️ |`true`|
| 10|[color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation)|✅🔧|  ✔️ |`"modern"`|
| 11|[color-hex-alpha](https://stylelint.io/user-guide/rules/color-hex-alpha)|    |   ❌  |     |
| 12|[color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)|✅🔧|  ✔️ |`"short"`|
| 13|[color-named](https://stylelint.io/user-guide/rules/color-named)|    |   ❌  |     |
| 14|[color-no-hex](https://stylelint.io/user-guide/rules/color-no-hex)|    |   ❌  |     |
| 15|[color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex)|✅  |  ✔️ |`true`|
| 16|[comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["first-nested"],"ignore":["stylelint-commands"]}]`</details>|
| 17|[comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty)|✅  |  ✔️ |`true`|
| 18|[comment-pattern](https://stylelint.io/user-guide/rules/comment-pattern)|    |   ❌  |     |
| 19|[comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)|✅🔧|  ✔️ |`"always"`|
| 20|[comment-word-disallowed-list](https://stylelint.io/user-guide/rules/comment-word-disallowed-list)|    |   ❌  |     |
| 21|[custom-media-pattern](https://stylelint.io/user-guide/rules/custom-media-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom media query name \"${name}\" to be kebab-case\""}]`</details>|
| 22|[custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-custom-property","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 23|[custom-property-no-missing-var-function](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function)|✅  |  ✔️ |`true`|
| 24|[custom-property-pattern](https://stylelint.io/user-guide/rules/custom-property-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom property name \"${name}\" to be kebab-case\""}]`</details>|
| 25|[declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties)|✅  |  ✔️ |`true`|
| 26|[declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["consecutive-duplicates-with-different-syntaxes"]}]`</details>|
| 27|[declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties)|✅🔧|  ✔️ |`true`|
| 28|[declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)|✅  |  ✔️ |`true`|
| 29|[declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)|✅  |  ✔️ |`1`  |
| 30|[declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-declaration","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 31|[declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important)|    |   ❌  |     |
| 32|[declaration-property-max-values](https://stylelint.io/user-guide/rules/declaration-property-max-values)|    |   ❌  |     |
| 33|[declaration-property-unit-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list)|    |   ❌  |     |
| 34|[declaration-property-unit-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list)|    |   ❌  |     |
| 35|[declaration-property-value-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list)|    |   ❌  |     |
| 36|[declaration-property-value-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list)|    |   ❌  |     |
| 37|[declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown)|    |   ❌  |     |
| 38|[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)|✅🔧|  ✔️ |`"always-where-recommended"`|
| 39|[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)|✅  |  ✔️ |`true`|
| 40|[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)|✅  |  ✔️ |`true`|
| 41|[font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation)|🔧|  ✔️ |`undefined`|
| 42|[function-allowed-list](https://stylelint.io/user-guide/rules/function-allowed-list)|    |   ❌  |     |
| 43|[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)|✅🔧|  ✔️ |`true`|
| 44|[function-disallowed-list](https://stylelint.io/user-guide/rules/function-disallowed-list)|    |   ❌  |     |
| 45|[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)|✅  |  ✔️ |`true`|
| 46|[function-name-case](https://stylelint.io/user-guide/rules/function-name-case)|✅🔧|  ✔️ |`"lower"`|
| 47|[function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown)|✅  |  ✔️ |`true`|
| 48|[function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)|    |   ❌  |     |
| 49|[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)|✅🔧|  ✔️ |`"always"`|
| 50|[function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list)|    |   ❌  |     |
| 51|[function-url-scheme-disallowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list)|    |   ❌  |     |
| 52|[hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation)|✅🔧|  ✔️ |`"angle"`|
| 53|[import-notation](https://stylelint.io/user-guide/rules/import-notation)|✅🔧|  ✔️ |`"url"`|
| 54|[keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 55|[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)|✅  |  ✔️ |`true`|
| 56|[keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`"percentage-unless-within-keyword-only-block"`</details>|
| 57|[keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected keyframe name \"${name}\" to be kebab-case\""}]`</details>|
| 58|[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-properties"]}]`</details>|
| 59|[lightness-notation](https://stylelint.io/user-guide/rules/lightness-notation)|✅🔧|  ✔️ |`"percentage"`|
| 60|[max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth)|    |   ❌  |     |
| 61|[media-feature-name-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list)|    |   ❌  |     |
| 62|[media-feature-name-disallowed-list](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list)|    |   ❌  |     |
| 63|[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown)|✅  |  ✔️ |`true`|
| 64|[media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 65|[media-feature-name-unit-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list)|    |   ❌  |     |
| 66|[media-feature-name-value-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list)|    |   ❌  |     |
| 67|[media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown)|    |   ❌  |     |
| 68|[media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation)|✅🔧|  ✔️ |`"context"`|
| 69|[media-query-no-invalid](https://stylelint.io/user-guide/rules/media-query-no-invalid)|✅  |  ✔️ |`true`|
| 70|[named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid)|✅  |  ✔️ |`true`|
| 71|[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)|✅  |  ✔️ |`true`|
| 72|[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules)|✅  |  ✔️ |`true`|
| 73|[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 74|[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)|✅  |  ✔️ |`true`|
| 75|[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)|✅  |  ✔️ |`true`|
| 76|[no-invalid-position-at-import-rule](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule)|✅  |  ✔️ |`true`|
| 77|[no-irregular-whitespace](https://stylelint.io/user-guide/rules/no-irregular-whitespace)|✅  |  ✔️ |`true`|
| 78|[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)|    |   ❌  |     |
| 79|[no-unknown-custom-media](https://stylelint.io/user-guide/rules/no-unknown-custom-media)|    |   ❌  |     |
| 80|[no-unknown-custom-properties](https://stylelint.io/user-guide/rules/no-unknown-custom-properties)|    |   ❌  |     |
| 81|[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)|✅  |  ✔️ |`4`  |
| 82|[property-allowed-list](https://stylelint.io/user-guide/rules/property-allowed-list)|    |   ❌  |     |
| 83|[property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list)|    |   ❌  |     |
| 84|[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown)|✅  |  ✔️ |`true`|
| 85|[property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 86|[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always-multi-line",{"except":["first-nested"],"ignore":["after-comment"]}]`</details>|
| 87|[rule-selector-property-disallowed-list](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list)|    |   ❌  |     |
| 88|[selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable)|✅  |  ✔️ |`true`|
| 89|[selector-attribute-name-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list)|    |   ❌  |     |
| 90|[selector-attribute-operator-allowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list)|    |   ❌  |     |
| 91|[selector-attribute-operator-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list)|    |   ❌  |     |
| 92|[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)|✅🔧|  ✔️ |`"always"`|
| 93|[selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected class selector \"${selector}\" to be kebab-case\""}]`</details>|
| 94|[selector-combinator-allowed-list](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list)|    |   ❌  |     |
| 95|[selector-combinator-disallowed-list](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list)|    |   ❌  |     |
| 96|[selector-disallowed-list](https://stylelint.io/user-guide/rules/selector-disallowed-list)|    |   ❌  |     |
| 97|[selector-id-pattern](https://stylelint.io/user-guide/rules/selector-id-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected id selector \"${selector}\" to be kebab-case\""}]`</details>|
| 98|[selector-max-attribute](https://stylelint.io/user-guide/rules/selector-max-attribute)|    |   ❌  |     |
| 99|[selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class)|    |   ❌  |     |
|100|[selector-max-combinators](https://stylelint.io/user-guide/rules/selector-max-combinators)|    |   ❌  |     |
|101|[selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors)|    |   ❌  |     |
|102|[selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)|    |   ❌  |     |
|103|[selector-max-pseudo-class](https://stylelint.io/user-guide/rules/selector-max-pseudo-class)|    |   ❌  |     |
|104|[selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity)|    |   ❌  |     |
|105|[selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type)|    |   ❌  |     |
|106|[selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal)|    |   ❌  |     |
|107|[selector-nested-pattern](https://stylelint.io/user-guide/rules/selector-nested-pattern)|    |   ❌  |     |
|108|[selector-no-qualifying-type](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)|    |   ❌  |     |
|109|[selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|110|[selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation)|✅🔧|  ✔️ |`"complex"`|
|111|[selector-pseudo-class-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list)|    |   ❌  |     |
|112|[selector-pseudo-class-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list)|    |   ❌  |     |
|113|[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown)|✅  |  ✔️ |`true`|
|114|[selector-pseudo-element-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list)|    |   ❌  |     |
|115|[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)|✅🔧|  ✔️ |`"double"`|
|116|[selector-pseudo-element-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list)|    |   ❌  |     |
|117|[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown)|✅  |  ✔️ |`true`|
|118|[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case)|✅🔧|  ✔️ |`"lower"`|
|119|[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-elements"]}]`</details>|
|120|[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)|✅🔧|  ✔️ |`true`|
|121|[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)|✅  |  ✔️ |`true`|
|122|[time-min-milliseconds](https://stylelint.io/user-guide/rules/time-min-milliseconds)|    |   ❌  |     |
|123|[unit-allowed-list](https://stylelint.io/user-guide/rules/unit-allowed-list)|    |   ❌  |     |
|124|[unit-disallowed-list](https://stylelint.io/user-guide/rules/unit-disallowed-list)|    |   ❌  |     |
|125|[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown)|✅  |  ✔️ |`true`|
|126|[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case)|✅🔧|  ✔️ |`"lower"`|
|127|[value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignoreValues":["box","inline-box"]}]`</details>|
|128|[@stylistic/at-rule-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|129|[@stylistic/at-rule-name-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|130|[@stylistic/at-rule-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|131|[@stylistic/block-closing-brace-empty-line-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|132|[@stylistic/block-closing-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|133|[@stylistic/block-closing-brace-newline-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|134|[@stylistic/block-closing-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|135|[@stylistic/block-opening-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|136|[@stylistic/block-opening-brace-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|137|[@stylistic/block-opening-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|138|[@stylistic/color-hex-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|139|[@stylistic/declaration-bang-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|140|[@stylistic/declaration-bang-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|141|[@stylistic/declaration-block-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|142|[@stylistic/declaration-block-semicolon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|143|[@stylistic/declaration-block-semicolon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|144|[@stylistic/declaration-block-trailing-semicolon](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon/README.md)|🔧🎨|  ✔️ |`"always"`|
|145|[@stylistic/declaration-colon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|146|[@stylistic/declaration-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|147|[@stylistic/declaration-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|148|[@stylistic/function-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|149|[@stylistic/function-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|150|[@stylistic/function-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|151|[@stylistic/function-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|152|[@stylistic/function-parentheses-newline-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|153|[@stylistic/function-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never-single-line"`|
|154|[@stylistic/function-whitespace-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|155|[@stylistic/indentation](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation/README.md)|🔧🎨|  ✔️ |`2`  |
|156|[@stylistic/max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines/README.md)|🔧🎨|  ✔️ |`1`  |
|157|[@stylistic/max-line-length](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length/README.md)|🎨|  ✔️ |`120`|
|158|[@stylistic/media-feature-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|159|[@stylistic/media-feature-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|160|[@stylistic/media-feature-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|161|[@stylistic/media-feature-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|162|[@stylistic/media-feature-range-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|163|[@stylistic/media-feature-range-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|164|[@stylistic/media-query-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|165|[@stylistic/media-query-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|166|[@stylistic/media-query-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|167|[@stylistic/no-empty-first-line](undefined)|🎨|  ✔️ |`true`|
|168|[@stylistic/no-eol-whitespace](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace/README.md)|🔧🎨|  ✔️ |`true`|
|169|[@stylistic/no-extra-semicolons](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons/README.md)|🔧🎨|  ✔️ |`true`|
|170|[@stylistic/no-missing-end-of-source-newline](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline/README.md)|🔧🎨|  ✔️ |`true`|
|171|[@stylistic/number-leading-zero](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero/README.md)|🔧🎨|  ✔️ |`"always"`|
|172|[@stylistic/number-no-trailing-zeros](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros/README.md)|🔧🎨|  ✔️ |`true`|
|173|[@stylistic/property-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|174|[@stylistic/selector-attribute-brackets-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|175|[@stylistic/selector-attribute-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|176|[@stylistic/selector-attribute-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|177|[@stylistic/selector-combinator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|178|[@stylistic/selector-combinator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|179|[@stylistic/selector-descendant-combinator-no-non-space](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space/README.md)|🔧🎨|  ✔️ |`true`|
|180|[@stylistic/selector-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|181|[@stylistic/selector-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|182|[@stylistic/selector-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|183|[@stylistic/selector-pseudo-class-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|184|[@stylistic/selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|185|[@stylistic/selector-pseudo-element-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|186|[@stylistic/string-quotes](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes/README.md)|🔧🎨|  ✔️ |`"double"`|
|187|[@stylistic/unit-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|188|[@stylistic/value-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|189|[@stylistic/value-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|190|[@stylistic/value-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|191|[@stylistic/value-list-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |

# Changelog
[CHANGELOG.md](CHANGELOG.md)