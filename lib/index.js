import recommendedRules from './rules/recommended.js';
import standardRules from './rules/standard.js';
import orderRules from './rules/order.js';


export default {
    'overrides': [{
        'customSyntax': 'postcss-scss',
        'files': ['**/*.scss']
    }, {
        'customSyntax': 'postcss-html',
        'files': ['**/*.html']
    }],
    'extends': 'stylelint-config-html',
    'plugins': [
        'stylelint-prettier',
        'stylelint-order'
    ],
    'rules': {
        'prettier/prettier': [true, {
            'tabWidth': 4,
            'endOfLine': 'auto'
        }],
        ... recommendedRules,
        ... standardRules,
        ... orderRules
    }
};
