const fs = require('fs');
const path = require('path');
const assert = require('assert');
const stylelint = require('stylelint');
const EC = require('eight-colors');

const stylelintConfig = require('../lib/index.js');

const list = [{
    'file': 'style.css'
}, {
    'file': 'style.scss',
    'customSyntax': 'postcss-scss'
}, {
    'file': 'style.html',
    'customSyntax': 'postcss-html'
}, {
    'file': 'style.vue',
    'customSyntax': 'postcss-html'
}];


it('check list', async () => {

    console.log('start style lint ...');

    for (const item of list) {

        const file = item.file;
        const customSyntax = item.customSyntax;

        console.log('=============================================================================');
        console.log(EC.cyan(`checking ${file} ...`));
        const input = fs.readFileSync(path.resolve(__dirname, `${file}.txt`)).toString('utf-8');
        const result = fs.readFileSync(path.resolve(__dirname, file)).toString('utf-8');
        // console.log(input);

        const data = await stylelint.lint({
            code: input,
            config: stylelintConfig,
            customSyntax: customSyntax,
            fix: true
        }).catch((err) => {
            console.error(err.stack);
        });

        const output = data.output;

        console.log(output);
        console.log(EC.green(result));

        assert.equal(output, result);

    }

});

