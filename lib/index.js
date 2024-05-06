import recommendedRules from './rules/recommended.js';
import standardRules from './rules/standard.js';
import orderRules from './rules/order.js';

export default {
    'allowEmptyInput': true,
    'fix': true,
    'overrides': [{
        'files': ['*.scss', '**/*.scss'],
        'customSyntax': 'postcss-scss'
    }],
    'extends': [
        '@stylistic/stylelint-config',
        'stylelint-config-html'
    ],
    'plugins': [
        '@stylistic/stylelint-plugin',
        'stylelint-order'
    ],
    'rules': {
        ... recommendedRules,
        ... standardRules,
        ... orderRules,
        '@stylistic/indentation': 4,
        '@stylistic/declaration-block-semicolon-newline-after': 'always'
    }
};
