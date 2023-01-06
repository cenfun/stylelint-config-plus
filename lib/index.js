const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

propertyOrdering.forEach((list) => {
    list.forEach((item) => {
        item.emptyLineBefore = 'never';
    });
});

// console.log(propertyOrdering);

module.exports = {
    'extends': [
        'stylelint-config-recommended',
        'stylelint-config-standard'
    ],
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
        'order/order': selectorOrdering,
        'order/properties-order': propertyOrdering,
        'at-rule-no-unknown': null,
        'font-family-no-missing-generic-family-keyword': null,
        'indentation': 4
    }
};
