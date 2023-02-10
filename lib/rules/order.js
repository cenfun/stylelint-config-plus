const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

propertyOrdering.forEach((list) => {
    list.forEach((item) => {
        item.emptyLineBefore = 'never';
    });
});

// console.log(propertyOrdering);

module.exports = {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering
};
