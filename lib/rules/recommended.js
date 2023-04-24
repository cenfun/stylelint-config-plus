const stylelintRecommendedRules = require('stylelint-config-recommended').rules;

const recommendedRules = {
    ... stylelintRecommendedRules,

    // overrides

    // font-family: Menlo, Consolas;
    // font-family: Webdings;
    'font-family-no-missing-generic-family-keyword': null,

    // for vue
    'function-no-unknown': [true, {
        ignoreFunctions: ['v-bind']
    }]

};

module.exports = recommendedRules;
