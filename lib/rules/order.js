import { propertyOrdering, selectorOrdering } from 'stylelint-semantic-groups';

propertyOrdering.forEach((list) => {
    list.forEach((item) => {
        item.emptyLineBefore = 'never';
    });
});


// propertyOrdering.forEach((item) => item.forEach((it) => {
//     console.log(it.groupName, it.properties);
// }));


export default {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering
};
