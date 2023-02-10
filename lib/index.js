const recommendedRules = require('./rules/recommended.js');
const standardRules = require('./rules/standard.js');
const orderRules = require('./rules/order.js');

module.exports = {
    'overrides': [{
        'customSyntax': 'postcss-scss',
        'files': ['**/*.scss']
    }, {
        'customSyntax': 'postcss-html',
        'files': ['**/*.html', '**/*.vue']
    }],
    'plugins': [
        'stylelint-order'
    ],
    'rules': {
        ... recommendedRules,
        ... standardRules,
        ... orderRules
    }
};
