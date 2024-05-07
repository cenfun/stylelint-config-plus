import rulesRecommended from './rules-recommended.js';
import rulesStandard from './rules-standard.js';
import rulesStylistic from './rules-stylistic.js';
import rulesOrder from './rules-order.js';
import rulesOverride from './rules-override.js';

export default {
    'allowEmptyInput': true,
    'fix': true,
    'overrides': [{
        'files': ['*.scss', '**/*.scss'],
        'customSyntax': 'postcss-scss'
    }],
    'extends': [
        'stylelint-config-html'
    ],
    'plugins': [
        '@stylistic/stylelint-plugin',
        'stylelint-order'
    ],
    'rules': {
        ... rulesRecommended,
        ... rulesStandard,
        ... rulesStylistic,
        ... rulesOrder,
        ... rulesOverride
    }
};
