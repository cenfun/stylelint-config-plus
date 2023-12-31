import stylelintRecommended from 'stylelint-config-recommended';

export default {
    ... stylelintRecommended.rules,

    // overrides

    // font-family: Menlo, Consolas;
    // font-family: Webdings;
    'font-family-no-missing-generic-family-keyword': null,

    // for vue
    'function-no-unknown': [true, {
        ignoreFunctions: ['v-bind']
    }]

};
