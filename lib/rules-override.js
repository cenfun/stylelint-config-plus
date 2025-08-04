export default {

    // overrides

    // font-family: Menlo, Consolas;
    // font-family: Webdings;
    'font-family-no-missing-generic-family-keyword': null,

    // for vue
    'function-no-unknown': [true, {
        ignoreFunctions: ['v-bind']
    }],

    'selector-pseudo-class-no-unknown': [
        true,
        {
            'ignorePseudoClasses': ['deep', 'global']
        }
    ],

    // for scss @
    'at-rule-no-unknown': [true, {
        ignoreAtRules: [
            'at-root',
            'content',
            'debug',
            'each',
            'else',
            'else if',
            'error',
            'extend',
            'for',
            'forward',
            'function',
            'if',
            'import',
            'include',
            'media',
            'mixin',
            'return',
            'use',
            'warn',
            'while'
        ]
    }],

    // stylistic
    '@stylistic/indentation': 4,
    '@stylistic/declaration-block-semicolon-newline-after': 'always'

};
