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
Base on [stylelint@17.4.0](https://github.com/stylelint/stylelint) (2026/3/2)  
|   |Rules|Count|   |
|:-:|-----|----:|--:|
|   |All rules|  207|   |
|✔️|Defined in plus|  148|71.5%|
| ❌|Undefined|   59|28.5%|
| ✅|Recommended + Standard|   82|39.6%|
|🔧|Fixable|  100|48.3%|
|🎨|Stylistic|   64|30.9%|

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
| 46|[display-notation](https://stylelint.io/user-guide/rules/display-notation)|🔧|  ✔️ |`undefined`|
| 47|[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)|✅🔧|  ✔️ |`"always-where-recommended"`|
| 48|[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)|✅  |  ✔️ |`true`|
| 49|[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)|✅  |  ✔️ |`null`|
| 50|[font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation)|🔧|  ✔️ |`undefined`|
| 51|[function-allowed-list](https://stylelint.io/user-guide/rules/function-allowed-list)|    |   ❌  |     |
| 52|[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)|✅🔧|  ✔️ |`true`|
| 53|[function-disallowed-list](https://stylelint.io/user-guide/rules/function-disallowed-list)|    |   ❌  |     |
| 54|[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)|    |   ❌  |     |
| 55|[function-name-case](https://stylelint.io/user-guide/rules/function-name-case)|✅🔧|  ✔️ |`"lower"`|
| 56|[function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown)|    |   ❌  |     |
| 57|[function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)|    |   ❌  |     |
| 58|[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)|✅🔧|  ✔️ |`"always"`|
| 59|[function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list)|    |   ❌  |     |
| 60|[function-url-scheme-disallowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list)|    |   ❌  |     |
| 61|[hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation)|✅🔧|  ✔️ |`"angle"`|
| 62|[import-notation](https://stylelint.io/user-guide/rules/import-notation)|✅🔧|  ✔️ |`"url"`|
| 63|[keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 64|[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)|✅  |  ✔️ |`true`|
| 65|[keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation)|✅🔧|  ✔️ |<details><summary>Details</summary>`"percentage-unless-within-keyword-only-block"`</details>|
| 66|[keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(name) => \"Expected keyframe name \"${name}\" to be kebab-case\""}]`</details>|
| 67|[layer-name-pattern](https://stylelint.io/user-guide/rules/layer-name-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)([.-][a-z0-9]+)*$",{"message":"(name) => \"Expected layer name \"${name}\" to be kebab-case\""}]`</details>|
| 68|[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-properties"]}]`</details>|
| 69|[lightness-notation](https://stylelint.io/user-guide/rules/lightness-notation)|✅🔧|  ✔️ |`"percentage"`|
| 70|[max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth)|    |   ❌  |     |
| 71|[media-feature-name-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list)|    |   ❌  |     |
| 72|[media-feature-name-disallowed-list](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list)|    |   ❌  |     |
| 73|[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown)|✅  |  ✔️ |`true`|
| 74|[media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
| 75|[media-feature-name-unit-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list)|    |   ❌  |     |
| 76|[media-feature-name-value-allowed-list](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list)|    |   ❌  |     |
| 77|[media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown)|✅  |  ✔️ |`true`|
| 78|[media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation)|✅🔧|  ✔️ |`"context"`|
| 79|[media-query-no-invalid](https://stylelint.io/user-guide/rules/media-query-no-invalid)|✅  |  ✔️ |`true`|
| 80|[media-type-no-deprecated](https://stylelint.io/user-guide/rules/media-type-no-deprecated)|✅  |  ✔️ |`true`|
| 81|[named-grid-areas-no-invalid](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid)|✅  |  ✔️ |`true`|
| 82|[nesting-selector-no-missing-scoping-root](https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root)|✅  |  ✔️ |`true`|
| 83|[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)|✅  |  ✔️ |`true`|
| 84|[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules)|✅  |  ✔️ |`true`|
| 85|[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors)|✅  |  ✔️ |`true`|
| 86|[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)|✅  |  ✔️ |`true`|
| 87|[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)|✅  |  ✔️ |`true`|
| 88|[no-invalid-position-at-import-rule](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule)|✅  |  ✔️ |`true`|
| 89|[no-invalid-position-declaration](https://stylelint.io/user-guide/rules/no-invalid-position-declaration)|✅  |  ✔️ |`true`|
| 90|[no-irregular-whitespace](https://stylelint.io/user-guide/rules/no-irregular-whitespace)|✅  |  ✔️ |`true`|
| 91|[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)|    |   ❌  |     |
| 92|[no-unknown-custom-media](https://stylelint.io/user-guide/rules/no-unknown-custom-media)|    |   ❌  |     |
| 93|[no-unknown-custom-properties](https://stylelint.io/user-guide/rules/no-unknown-custom-properties)|    |   ❌  |     |
| 94|[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)|✅  |  ✔️ |`4`  |
| 95|[property-allowed-list](https://stylelint.io/user-guide/rules/property-allowed-list)|    |   ❌  |     |
| 96|[property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list)|    |   ❌  |     |
| 97|[property-no-deprecated](https://stylelint.io/user-guide/rules/property-no-deprecated)|✅🔧|  ✔️ |`true`|
| 98|[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown)|✅  |  ✔️ |`true`|
| 99|[property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|100|[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before)|✅🔧|  ✔️ |<details><summary>Details</summary>`["always-multi-line",{"except":["first-nested"],"ignore":["after-comment"]}]`</details>|
|101|[rule-nesting-at-rule-required-list](https://stylelint.io/user-guide/rules/rule-nesting-at-rule-required-list)|    |   ❌  |     |
|102|[rule-selector-property-disallowed-list](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list)|    |   ❌  |     |
|103|[selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable)|✅  |  ✔️ |`true`|
|104|[selector-attribute-name-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list)|    |   ❌  |     |
|105|[selector-attribute-operator-allowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list)|    |   ❌  |     |
|106|[selector-attribute-operator-disallowed-list](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list)|    |   ❌  |     |
|107|[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)|✅🔧|  ✔️ |`"always"`|
|108|[selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected class selector \"${selector}\" to be kebab-case\""}]`</details>|
|109|[selector-combinator-allowed-list](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list)|    |   ❌  |     |
|110|[selector-combinator-disallowed-list](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list)|    |   ❌  |     |
|111|[selector-disallowed-list](https://stylelint.io/user-guide/rules/selector-disallowed-list)|    |   ❌  |     |
|112|[selector-id-pattern](https://stylelint.io/user-guide/rules/selector-id-pattern)|✅  |  ✔️ |<details><summary>Details</summary>`["^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",{"message":"(selector) => \"Expected id selector \"${selector}\" to be kebab-case\""}]`</details>|
|113|[selector-max-attribute](https://stylelint.io/user-guide/rules/selector-max-attribute)|    |   ❌  |     |
|114|[selector-max-class](https://stylelint.io/user-guide/rules/selector-max-class)|    |   ❌  |     |
|115|[selector-max-combinators](https://stylelint.io/user-guide/rules/selector-max-combinators)|    |   ❌  |     |
|116|[selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors)|    |   ❌  |     |
|117|[selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)|    |   ❌  |     |
|118|[selector-max-pseudo-class](https://stylelint.io/user-guide/rules/selector-max-pseudo-class)|    |   ❌  |     |
|119|[selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity)|    |   ❌  |     |
|120|[selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type)|    |   ❌  |     |
|121|[selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal)|    |   ❌  |     |
|122|[selector-nested-pattern](https://stylelint.io/user-guide/rules/selector-nested-pattern)|    |   ❌  |     |
|123|[selector-no-qualifying-type](https://stylelint.io/user-guide/rules/selector-no-qualifying-type)|    |   ❌  |     |
|124|[selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix)|✅🔧|  ✔️ |`true`|
|125|[selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation)|✅🔧|  ✔️ |`"complex"`|
|126|[selector-pseudo-class-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list)|    |   ❌  |     |
|127|[selector-pseudo-class-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list)|    |   ❌  |     |
|128|[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignorePseudoClasses":["deep","global"]}]`</details>|
|129|[selector-pseudo-element-allowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list)|    |   ❌  |     |
|130|[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)|✅🔧|  ✔️ |`"double"`|
|131|[selector-pseudo-element-disallowed-list](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list)|    |   ❌  |     |
|132|[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown)|✅  |  ✔️ |`true`|
|133|[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case)|✅🔧|  ✔️ |`"lower"`|
|134|[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["custom-elements"]}]`</details>|
|135|[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)|✅🔧|  ✔️ |`true`|
|136|[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)|✅  |  ✔️ |<details><summary>Details</summary>`[true,{"ignore":["at-rule-preludes","declaration-values"]}]`</details>|
|137|[syntax-string-no-invalid](https://stylelint.io/user-guide/rules/syntax-string-no-invalid)|✅  |  ✔️ |`true`|
|138|[time-min-milliseconds](https://stylelint.io/user-guide/rules/time-min-milliseconds)|    |   ❌  |     |
|139|[unit-allowed-list](https://stylelint.io/user-guide/rules/unit-allowed-list)|    |   ❌  |     |
|140|[unit-disallowed-list](https://stylelint.io/user-guide/rules/unit-disallowed-list)|    |   ❌  |     |
|141|[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown)|    |   ❌  |     |
|142|[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case)|✅🔧|  ✔️ |`"lower"`|
|143|[value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)|✅🔧|  ✔️ |<details><summary>Details</summary>`[true,{"ignoreValues":["box","inline-box"]}]`</details>|
|144|[@stylistic/at-rule-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|145|[@stylistic/at-rule-name-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|146|[@stylistic/at-rule-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|147|[@stylistic/block-closing-brace-empty-line-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|148|[@stylistic/block-closing-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|149|[@stylistic/block-closing-brace-newline-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|150|[@stylistic/block-closing-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|151|[@stylistic/block-opening-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|152|[@stylistic/block-opening-brace-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|153|[@stylistic/block-opening-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|154|[@stylistic/color-hex-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|155|[@stylistic/declaration-bang-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|156|[@stylistic/declaration-bang-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|157|[@stylistic/declaration-block-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|158|[@stylistic/declaration-block-semicolon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|159|[@stylistic/declaration-block-semicolon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|160|[@stylistic/declaration-block-trailing-semicolon](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon/README.md)|🔧🎨|  ✔️ |`"always"`|
|161|[@stylistic/declaration-colon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|162|[@stylistic/declaration-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|163|[@stylistic/declaration-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|164|[@stylistic/function-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|165|[@stylistic/function-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|166|[@stylistic/function-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|167|[@stylistic/function-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|168|[@stylistic/function-parentheses-newline-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|169|[@stylistic/function-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never-single-line"`|
|170|[@stylistic/function-whitespace-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|171|[@stylistic/indentation](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation/README.md)|🔧🎨|  ✔️ |`4`  |
|172|[@stylistic/max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines/README.md)|🔧🎨|  ✔️ |`1`  |
|173|[@stylistic/max-line-length](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length/README.md)|🎨|  ✔️ |`120`|
|174|[@stylistic/media-feature-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|175|[@stylistic/media-feature-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|176|[@stylistic/media-feature-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|177|[@stylistic/media-feature-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|178|[@stylistic/media-feature-range-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|179|[@stylistic/media-feature-range-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|180|[@stylistic/media-query-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|181|[@stylistic/media-query-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|182|[@stylistic/media-query-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|183|[@stylistic/no-empty-first-line](undefined)|🎨|  ✔️ |`true`|
|184|[@stylistic/no-eol-whitespace](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace/README.md)|🔧🎨|  ✔️ |`true`|
|185|[@stylistic/no-extra-semicolons](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons/README.md)|🔧🎨|  ✔️ |`true`|
|186|[@stylistic/no-missing-end-of-source-newline](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline/README.md)|🔧🎨|  ✔️ |`true`|
|187|[@stylistic/number-leading-zero](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero/README.md)|🔧🎨|  ✔️ |`"always"`|
|188|[@stylistic/number-no-trailing-zeros](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros/README.md)|🔧🎨|  ✔️ |`true`|
|189|[@stylistic/property-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|190|[@stylistic/selector-attribute-brackets-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|191|[@stylistic/selector-attribute-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after/README.md)|🔧🎨|  ✔️ |`"never"`|
|192|[@stylistic/selector-attribute-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|193|[@stylistic/selector-combinator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|194|[@stylistic/selector-combinator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before/README.md)|🔧🎨|  ✔️ |`"always"`|
|195|[@stylistic/selector-descendant-combinator-no-non-space](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space/README.md)|🔧🎨|  ✔️ |`true`|
|196|[@stylistic/selector-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always"`|
|197|[@stylistic/selector-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|198|[@stylistic/selector-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |
|199|[@stylistic/selector-pseudo-class-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|200|[@stylistic/selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)|🔧🎨|  ✔️ |`"never"`|
|201|[@stylistic/selector-pseudo-element-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|202|[@stylistic/string-quotes](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes/README.md)|🔧🎨|  ✔️ |`"double"`|
|203|[@stylistic/unit-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case/README.md)|🔧🎨|  ✔️ |`"lower"`|
|204|[@stylistic/value-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after/README.md)|🔧🎨|  ✔️ |`"always-multi-line"`|
|205|[@stylistic/value-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after/README.md)|🔧🎨|  ✔️ |`"always-single-line"`|
|206|[@stylistic/value-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before/README.md)|🔧🎨|  ✔️ |`"never"`|
|207|[@stylistic/value-list-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines/README.md)|🔧🎨|  ✔️ |`0`  |

# Changelog
[CHANGELOG.md](CHANGELOG.md)