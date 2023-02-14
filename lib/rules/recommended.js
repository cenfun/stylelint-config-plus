const stylelintRecommendedRules = require('stylelint-config-recommended').rules;

const recommendedRules = {
    ... stylelintRecommendedRules,

    // overrides

    // font-family: Menlo, Consolas;
    // font-family: Webdings;
    'font-family-no-missing-generic-family-keyword': null

};

module.exports = recommendedRules;
