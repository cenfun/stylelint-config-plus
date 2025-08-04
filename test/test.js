import fs from 'fs';
import path from 'path';
import EC from 'eight-colors';
import { spawn } from 'child_process';

const sh = (cmd, options = {}) => {
    return new Promise((resolve, reject) => {
        const cp = spawn(cmd, {
            shell: true,
            stdio: 'inherit',
            ... options
        });
        cp.on('error', (err) => {
            reject(err);
        });
        cp.on('close', () => {
            resolve();
        });
        cp.on('exit', () => {
            resolve();
        });
    });
};

const getStylelintCmd = function(stylelintFiles) {
    // https://stylelint.io/

    const lintBin = 'npx stylelint';
    // console.log(lintBin);
    const params = [lintBin];

    params.push(`"${stylelintFiles}"`);
    params.push('--config stylelint.config.js');
    params.push('--allow-empty-input');
    params.push('--color');
    params.push('--fix');

    return params.join(' ');
};

const originalDir = path.resolve(import.meta.dirname, 'original');
const snapshots = [];
const list = fs.readdirSync(originalDir);
for (const txtName of list) {
    const filename = txtName.slice(0, -4);
    // console.log(filename);
    const savePath = path.resolve(import.meta.dirname, `formatted/${filename}`);
    const readPath = path.resolve(originalDir, txtName);
    fs.writeFileSync(savePath, fs.readFileSync(readPath));

    const snapPath = path.resolve(import.meta.dirname, `snapshot/${filename}`);
    snapshots.push({
        snapPath,
        savePath
    });

}

const cmd = getStylelintCmd('test/formatted/*.*');
console.log(cmd);

it('style lint 1', async () => {
    await sh(cmd);
});

it('style lint 2', async () => {
    await sh(cmd);
});

it('check results', () => {

    let hasError;
    for (const item of snapshots) {

        const { snapPath, savePath } = item;

        const c1 = fs.readFileSync(snapPath).toString('utf-8').replace(/\r\n/g, '\n');
        const c2 = fs.readFileSync(savePath).toString('utf-8').replace(/\r\n/g, '\n');

        if (c1 !== c2) {
            console.log('=========================================================');
            EC.logCyan(c1);
            EC.logRed(c2);
            hasError = true;
        }

    }

    if (hasError) {
        throw new Error('failed');
    }

});
