import fs from 'fs';
import path from 'path';
import assert from 'assert';
import stylelint from 'stylelint';
import EC from 'eight-colors';

import stylelintConfig from '../lib/index.js';

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
        const input = fs.readFileSync(path.resolve('test', `${file}.txt`)).toString('utf-8');

        console.log('input:');
        console.log(JSON.stringify(input));

        // console.log(input);

        let data = await stylelint.lint({
            code: input,
            config: stylelintConfig,
            customSyntax: customSyntax,
            fix: true
        }).catch((err) => {
            console.error(err.stack);
        });

        // requires double lint
        data = await stylelint.lint({
            code: data.code,
            config: stylelintConfig,
            customSyntax: customSyntax,
            fix: true
        }).catch((err) => {
            console.error(err.stack);
        });

        // console.log(data);

        const output = data.code;
        console.log('output:');
        console.log(JSON.stringify(output));

        // assert.equal(code, result);
        const check = fs.readFileSync(path.resolve('test', file)).toString('utf-8');

        console.log('check:');
        console.log(JSON.stringify(check));
        try {
            assert(output === check);
        } catch (e) {
            EC.logRed(e.message);
        }
    }

});

