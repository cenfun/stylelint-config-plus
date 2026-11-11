import html from 'stylelint-config-html';
import rulesRecommended from './rules-recommended.js';
import rulesStandard from './rules-standard.js';
import rulesStylistic from './rules-stylistic.js';
import rulesOrder from './rules-order.js';
import rulesOverride from './rules-override.js';

// Stylistic 6 reads SCSS through its own namespace, including embedded styles.
const rulesScss = Object.fromEntries(Object.entries({
    ... rulesStylistic,
    ... rulesOverride
}).filter(([name]) => name.startsWith('@stylistic/')).map(([name, value]) => [
    name.replace('@stylistic/', '@stylistic/scss/'), value
]));

export default {
    'allowEmptyInput': true,
    'fix': true,
    'overrides': [{
        'files': ['*.scss', '**/*.scss'],
        'customSyntax': 'postcss-scss',
        'rules': rulesScss
    }, ... html.overrides.map(({ files }) => ({
        files,
        rules: rulesScss
    }))],
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
