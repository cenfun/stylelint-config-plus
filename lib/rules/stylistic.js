/*
Unfortunately, stylistic rules deprecated in stylelint v15 by Prettier

* https://github.com/stylelint/stylelint/pull/6504
* https://stylelint.io/migration-guide/to-15#deprecated-stylistic-rules

Don't know why but:

* We don't need to use Prettier because StyleLint and Eslint have done a good job
* We will never use Prettier because so many tools are loaded in the front-end development, conflicts and troubles are more and more

So we need to resume use of stylistic rules in stylelint v15+

*/

// 76 of the rules that enforce stylistic conventions
// https://stylelint.io/user-guide/rules#deprecated

// stylistic rules value from stylelint-config-standard v29

const stylisticRules = {

    // # Color

    'color-hex-case': 'lower',


    // # Function

    'function-comma-newline-after': 'always-multi-line',
    // function-comma-newline-before
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',


    // # Number

    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,


    // # String

    'string-quotes': 'double',


    // # Unit

    'unit-case': 'lower',


    // # Value list

    'value-list-comma-newline-after': 'always-multi-line',
    // value-list-comma-newline-before
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,


    // # Property

    'property-case': 'lower',


    // # Declaration

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',


    // # Declaration block

    'declaration-block-semicolon-newline-after': 'always-multi-line',
    // declaration-block-semicolon-newline-before
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',


    // # Block

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    // block-closing-brace-space-after
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    // block-opening-brace-newline-before
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',


    // # Selector

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',


    // # Selector list

    'selector-list-comma-newline-after': 'always',
    // selector-list-comma-newline-before
    // selector-list-comma-space-after
    'selector-list-comma-space-before': 'never',


    // # Media feature

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',


    // # Media query list

    'media-query-list-comma-newline-after': 'always-multi-line',
    // media-query-list-comma-newline-before
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',


    // # At-rule

    'at-rule-name-case': 'lower',
    // at-rule-name-newline-after
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    // at-rule-semicolon-space-before


    // # General / Sheet

    'indentation': 4,
    // linebreaks
    'max-empty-lines': 1,
    'max-line-length': 120,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    // no-extra-semicolons
    'no-missing-end-of-source-newline': true
    // unicode-bom

};

module.exports = stylisticRules;
