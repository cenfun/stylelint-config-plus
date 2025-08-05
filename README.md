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
Base on [stylelint@16.23.0](https://github.com/stylelint/stylelint) (2025/8/5)  
|   |Rules|Count|   |
|:-:|-----|----:|--:|
|   |All rules|  205|   |
|✔️|Defined in plus|  147|71.7%|
| ❌|Undefined|   58|28.3%|
| ✅|Recommended + Standard|   82|40.0%|
|🔧|Fixable|   99|48.3%|
|🎨|Stylistic|   64|31.2%|

### Details  
|   |Rules|Type|Enabled|Value|
|--:|:----|:---|:-----:|:----|
|  1|[alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`["percentage",{"exceptProperties":["opacity","fill-opacity","flood-opacity","stop-opacity","stroke-opacity"]}]`</details>|
|  2|[annotation-no-unknown](https://stylelint.io/user-guide/rules/annotation-no-unknown)|✅  |  ✔️ |`true`|
|  3|[at-rule-allowed-list](https://stylelint.io/user-guide/rules/at-rule-allowed-list)|    |   ❌  |     |
|  4|[at-rule-descriptor-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown)|✅  |  ✔️ |`true`|
|  5|[at-rule-descriptor-value-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown)|✅  |  ✔️ |`true`|
|  6|[at-rule-disallowed-list](https://stylelint.io/user-guide/rules/at-rule-disallowed-list)|    |   ❌  |     |
|  7|[at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["blockless-after-same-name-blockless","first-nested"],"ignore":["after-comment"]}]`</details>|
|  8|[at-rule-no-deprecated](https://stylelint.io/user-guide/rules/at-rule-no-deprecated)|✅🔧|  ✔️ |`true`|
|  9|[at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignoreAtRules":["at-root","content","debug","each","else","else if","error","extend","for","forward","function","if","import","include","media","mixin","return","use","warn","while"]}]`</details>|
| 10|[at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 11|[at-rule-prelude-no-invalid](https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid)|✅  |  ✔️ |`[true,{"ignoreAtRules":["media"]}]`|
| 12|[at-rule-property-required-list](https://stylelint.io/user-guide/rules/at-rule-property-required-list)|    |   ❌  |     |
| 13|[block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty)|✅  |  ✔️ |`true`|
| 14|[block-no-redundant-nested-style-rules](https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules)|✅  |  ✔️ |`true`|
| 15|[color-function-alias-notation](https://stylelint.io/user-guide/rules/color-function-alias-notation)|✅🔧|  ✔️ |`"without-alpha"`|
| 16|[color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation)|✅🔧|  ✔️ |`"modern"`|
| 17|[color-hex-alpha](https://stylelint.io/user-guide/rules/color-hex-alpha)|    |   ❌  |     |
| 18|[color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)|✅🔧|  ✔️ |`"short"`|
| 19|[color-named](https://stylelint.io/user-guide/rules/color-named)|    |   ❌  |     |
| 20|[color-no-hex](https://stylelint.io/user-guide/rules/color-no-hex)|    |   ❌  |     |
| 21|[color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex)|    |   ❌  |     |
| 22|[comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["first-nested"],"ignore":["stylelint-commands"]}]`</details>|
| 23|[comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty)|✅  |  ✔️ |`true`|
| 24|[comment-pattern](https://stylelint.io/user-guide/rules/comment-pattern)|    |   ❌  |     |
| 25|[comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)|✅🔧|  ✔️ |`"always"`|
| 26|[comment-word-disallowed-list](https://stylelint.io/user-guide/rules/comment-word-disallowed-list)|    |   ❌  |     |
| 27|[container-name-pattern](https://stylelint.io/user-guide/rules/container-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^(--)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected container name \"${name}\" to be kebab-case\""}]`</details>|
| 28|[custom-media-pattern](https://stylelint.io/user-guide/rules/custom-media-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom media query name \"${name}\" to be kebab-case\""}]`</details>|
| 29|[custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-custom-property","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 30|[custom-property-no-missing-var-function](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function)|✅  |  ✔️ |`true`|
| 31|[custom-property-pattern](https://stylelint.io/user-guide/rules/custom-property-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected custom property name \"${name}\" to be kebab-case\""}]`</details>|
| 32|[declaration-block-no-duplicate-custom-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties)|✅  |  ✔️ |`true`|
| 33|[declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["consecutive-duplicates-with-different-syntaxes"]}]`</details>|
| 34|[declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties)|✅🔧|  ✔️ |`true`|
| 35|[declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)|✅  |  ✔️ |`true`|
| 36|[declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)|✅  |  ✔️ |`1`  |
| 37|[declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always",{"except":["after-declaration","first-nested"],"ignore":["after-comment","inside-single-line-block"]}]`</details>|
| 38|[declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important)|    |   ❌  |     |
| 39|[declaration-property-max-values](https://stylelint.io/user-guide/rules/declaration-property-max-values)|    |   ❌  |     |
| 40|[declaration-property-unit-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list)|    |   ❌  |     |
| 41|[declaration-property-unit-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list)|    |   ❌  |     |
| 42|[declaration-property-value-allowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list)|    |   ❌  |     |
| 43|[declaration-property-value-disallowed-list](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list)|    |   ❌  |     |
| 44|[declaration-property-value-keyword-no-deprecated](https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated)|✅🔧|  ✔️ |`true`|
| 45|[declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown)|✅  |  ✔️ |`true`|
| 46|[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)|✅🔧|  ✔️ |`"always-where-recommended"`|
| 47|[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)|✅  |  ✔️ |`true`|
| 48|[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)|✅  |  ✔️ |`null`|
| 49|[font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation)|🔧|  ✔️ |`undefined`|
| 50|[function-allowed-list](https://stylelint.io/user-guide/rules/function-allowed-list)|    |   ❌  |     |
| 51|[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)|✅🔧|  ✔️ |`true`|
| 52|[function-disallowed-list](https://stylelint.io/user-guide/rules/function-disallowed-list)|    |   ❌  |     |
| 53|[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)|    |   ❌  |     |
| 54|[function-name-case](https://stylelint.io/user-guide/rules/function-name-case)|✅🔧|  ✔️ |`"lower"`|
| 55|[function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown)|    |   ❌  |     |
| 56|[function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)|    |   ❌  |     |
| 57|[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)|✅🔧|  ✔️ |`"always"`|
| 58|[function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list)|    |   ❌  |     |
| 59|[function-url-scheme-disallowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list)|    |   ❌  |     |
| 60|[hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation)|✅🔧|  ✔️ |`"angle"`|
| 61|[import-notation](https://stylelint.io/user-guide/rules/import-notation)|✅🔧|  ✔️ |`"url"`|
| 62|[keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 63|[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)|✅  |  ✔️ |`true`|
| 64|[keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`"percentage-unless-within-keyword-only-block"`</details>|
| 65|[keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected keyframe name \"${name}\" to be kebab-case\""}]`</details>|
| 66|[layer-name-pattern](https://stylelint.io/user-guide/rules/layer-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected layer name \"${name}\" to be kebab-case\""}]`</details>|
| 67|[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-properties"]}]`</details>|
| 68|[lightness-notation](https://stylelint.io/user-guide/rules/lightness-notation)|✅🔧|  ✔️ |`"percentage"`|
| 69|[max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth)|    |   ❌  |     |
| 70|[media-feature-name-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list)|    |   ❌  |     |
| 71|[media-feature-name-disallowed-list](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list)|    |   ❌  |     |
| 72|[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown)|✅  |  ✔️ |`true`|
| 73|[media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 74|[media-feature-name-unit-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list)|    |   ❌  |     |
| 75|[media-feature-name-value-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list)|    |   ❌  |     |
| 76|[media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown)|✅  |  ✔️ |`true`|
| 77|[media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation)|✅🔧|  ✔️ |`"context"`|
| 78|[media-query-no-invalid](https://stylelint.io/user-guide/rules/media-query-no-invalid)|✅  |  ✔️ |`true`|
| 79|[media-type-no-deprecated](https://stylelint.io/user-guide/rules/media-type-no-deprecated)|✅  |  ✔️ |`true`|
| 80|[named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid)|✅  |  ✔️ |`true`|
| 81|[nesting-selector-no-missing-scoping-root](https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root)|✅  |  ✔️ |`true`|
| 82|[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)|✅  |  ✔️ |`true`|
| 83|[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules)|✅  |  ✔️ |`true`|
| 84|[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 85|[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)|✅  |  ✔️ |`true`|
| 86|[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)|✅  |  ✔️ |`true`|
| 87|[no-invalid-position-at-import-rule](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule)|✅  |  ✔️ |`true`|
| 88|[no-invalid-position-declaration](https://stylelint.io/user-guide/rules/no-invalid-position-declaration)|✅  |  ✔️ |`true`|
| 89|[no-irregular-whitespace](https://stylelint.io/user-guide/rules/no-irregular-whitespace)|✅  |  ✔️ |`true`|
| 90|[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)|    |   ❌  |     |
| 91|[no-unknown-custom-media](https://stylelint.io/user-guide/rules/no-unknown-custom-media)|    |   ❌  |     |
| 92|[no-unknown-custom-properties](https://stylelint.io/user-guide/rules/no-unknown-custom-properties)|    |   ❌  |     |
| 93|[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)|✅  |  ✔️ |`4`  |
| 94|[property-allowed-list](https://stylelint.io/user-guide/rules/property-allowed-list)|    |   ❌  |     |
| 95|[property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list)|    |   ❌  |     |
| 96|[property-no-deprecated](https://stylelint.io/user-guide/rules/property-no-deprecated)|✅🔧|  ✔️ |`true`|
| 97|[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown)|✅  |  ✔️ |`true`|
| 98|[property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 99|[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always-multi-line",{"except":["first-nested"],"ignore":["after-comment"]}]`</details>|
|100|[rule-selector-property-disallowed-list](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list)|    |   ❌  |     |
|101|[selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable)|✅  |  ✔️ |`true`|
|102|[selector-attribute-name-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list)|    |   ❌  |     |
|103|[selector-attribute-operator-allowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list)|    |   ❌  |     |
|104|[selector-attribute-operator-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list)|    |   ❌  |     |
|105|[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)|✅🔧|  ✔️ |`"always"`|
|106|[selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected class selector \"${selector}\" to be kebab-case\""}]`</details>|
|107|[selector-combinator-allowed-list](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list)|    |   ❌  |     |
|108|[selector-combinator-disallowed-list](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list)|    |   ❌  |     |
|109|[selector-disallowed-list](https://stylelint.io/user-guide/rules/selector-disallowed-list)|    |   ❌  |     |
|110|[selector-id-pattern](https://stylelint.io/user-guide/rules/selector-id-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected id selector \"${selector}\" to be kebab-case\""}]`</details>|
|111|[selector-max-attribute](https://stylelint.io/user-guide/rules/selector-max-attribute)|    |   ❌  |     |
|112|[selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class)|    |   ❌  |     |
|113|[selector-max-combinators](https://stylelint.io/user-guide/rules/selector-max-combinators)|    |   ❌  |     |
|114|[selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors)|    |   ❌  |     |
|115|[selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)|    |   ❌  |     |
|116|[selector-max-pseudo-class](https://stylelint.io/user-guide/rules/selector-max-pseudo-class)|    |   ❌  |     |
|117|[selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity)|    |   ❌  |     |
|118|[selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type)|    |   ❌  |     |
|119|[selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal)|    |   ❌  |     |
|120|[selector-nested-pattern](https://stylelint.io/user-guide/rules/selector-nested-pattern)|    |   ❌  |     |
|121|[selector-no-qualifying-type](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)|    |   ❌  |     |
|122|[selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|123|[selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation)|✅🔧|  ✔️ |`"complex"`|
|124|[selector-pseudo-class-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list)|    |   ❌  |     |
|125|[selector-pseudo-class-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list)|    |   ❌  |     |
|126|[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignorePseudoClasses":["deep","global"]}]`</details>|
|127|[selector-pseudo-element-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list)|    |   ❌  |     |
|128|[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)|✅🔧|  ✔️ |`"double"`|
|129|[selector-pseudo-element-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list)|    |   ❌  |     |
|130|[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown)|✅  |  ✔️ |`true`|
|131|[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case)|✅🔧|  ✔️ |`"lower"`|
|132|[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-elements"]}]`</details>|
|133|[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)|✅🔧|  ✔️ |`true`|
|134|[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["at-rule-preludes","declaration-values"]}]`</details>|
|135|[syntax-string-no-invalid](https://stylelint.io/user-guide/rules/syntax-string-no-invalid)|✅  |  ✔️ |`true`|
|136|[time-min-milliseconds](https://stylelint.io/user-guide/rules/time-min-milliseconds)|    |   ❌  |     |
|137|[unit-allowed-list](https://stylelint.io/user-guide/rules/unit-allowed-list)|    |   ❌  |     |
|138|[unit-disallowed-list](https://stylelint.io/user-guide/rules/unit-disallowed-list)|    |   ❌  |     |
|139|[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown)|    |   ❌  |     |
|140|[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case)|✅🔧|  ✔️ |`"lower"`|
|141|[value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignoreValues":["box","inline-box"]}]`</details>|
|142|[@stylistic/at-rule-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|143|[@stylistic/at-rule-name-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|144|[@stylistic/at-rule-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|145|[@stylistic/block-closing-brace-empty-line-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|146|[@stylistic/block-closing-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|147|[@stylistic/block-closing-brace-newline-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|148|[@stylistic/block-closing-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|149|[@stylistic/block-opening-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|150|[@stylistic/block-opening-brace-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|151|[@stylistic/block-opening-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|152|[@stylistic/color-hex-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|153|[@stylistic/declaration-bang-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|154|[@stylistic/declaration-bang-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|155|[@stylistic/declaration-block-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|156|[@stylistic/declaration-block-semicolon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|157|[@stylistic/declaration-block-semicolon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|158|[@stylistic/declaration-block-trailing-semicolon](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon/README.md)|🔧🎨|  ✔️ |`"always"`|
|159|[@stylistic/declaration-colon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|160|[@stylistic/declaration-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|161|[@stylistic/declaration-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|162|[@stylistic/function-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|163|[@stylistic/function-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|164|[@stylistic/function-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|165|[@stylistic/function-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|166|[@stylistic/function-parentheses-newline-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|167|[@stylistic/function-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never-single-line"`|
|168|[@stylistic/function-whitespace-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|169|[@stylistic/indentation](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation/README.md)|🔧🎨|  ✔️ |`4`  |
|170|[@stylistic/max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines/README.md)|🔧🎨|  ✔️ |`1`  |
|171|[@stylistic/max-line-length](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length/README.md)|🎨|  ✔️ |`120`|
|172|[@stylistic/media-feature-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|173|[@stylistic/media-feature-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|174|[@stylistic/media-feature-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|175|[@stylistic/media-feature-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|176|[@stylistic/media-feature-range-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|177|[@stylistic/media-feature-range-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|178|[@stylistic/media-query-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|179|[@stylistic/media-query-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|180|[@stylistic/media-query-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|181|[@stylistic/no-empty-first-line](undefined)|🎨|  ✔️ |`true`|
|182|[@stylistic/no-eol-whitespace](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace/README.md)|🔧🎨|  ✔️ |`true`|
|183|[@stylistic/no-extra-semicolons](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons/README.md)|🔧🎨|  ✔️ |`true`|
|184|[@stylistic/no-missing-end-of-source-newline](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline/README.md)|🔧🎨|  ✔️ |`true`|
|185|[@stylistic/number-leading-zero](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero/README.md)|🔧🎨|  ✔️ |`"always"`|
|186|[@stylistic/number-no-trailing-zeros](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros/README.md)|🔧🎨|  ✔️ |`true`|
|187|[@stylistic/property-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|188|[@stylistic/selector-attribute-brackets-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|189|[@stylistic/selector-attribute-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|190|[@stylistic/selector-attribute-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|191|[@stylistic/selector-combinator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|192|[@stylistic/selector-combinator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|193|[@stylistic/selector-descendant-combinator-no-non-space](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space/README.md)|🔧🎨|  ✔️ |`true`|
|194|[@stylistic/selector-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|195|[@stylistic/selector-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|196|[@stylistic/selector-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|197|[@stylistic/selector-pseudo-class-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|198|[@stylistic/selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|199|[@stylistic/selector-pseudo-element-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|200|[@stylistic/string-quotes](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes/README.md)|🔧🎨|  ✔️ |`"double"`|
|201|[@stylistic/unit-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|202|[@stylistic/value-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|203|[@stylistic/value-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|204|[@stylistic/value-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|205|[@stylistic/value-list-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |

# Changelog
[CHANGELOG.md](CHANGELOG.md)