import os from 'os';
import fs from 'fs';
import path from 'path';
import EC from 'eight-colors';
import MG from 'markdown-grid';
import recommended from 'stylelint-config-recommended';
import standard from 'stylelint-config-standard';

import builtInRules from '../node_modules/stylelint/lib/rules/index.mjs';
import myOverrideRules from '../lib/rules-override.js';

const jsonToStr = (obj, indent = 4, replacement = null) => {
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'function') {
            let s = value.toString();
            if (replacement) {
                s = replacement(s);
            }
            return s;
        }
        return value;
    }, indent);
};

const jsonToContent = (obj, indent = 4) => {

    const cache = {};
    let index = 1;

    let str = JSON.stringify(obj, (key, value) => {
        if (typeof value === 'function') {
            const funStr = value.toString();
            const cacheKey = `{function_${index}}`;
            cache[cacheKey] = funStr;
            index += 1;
            return cacheKey;
        }
        return value;
    }, indent);

    if (str) {
        str = str.replace(/"/g, "'");

        Object.keys(cache).forEach((key) => {
            const strKey = `'${key}'`;
            str = str.replace(strKey, cache[key]);
        });
    }

    return str;
};

const checkRules = (metadata) => {
    const allRules = metadata.rules;

    const info = `Base on [stylelint@${metadata.version}](https://github.com/stylelint/stylelint) (${metadata.date})  \n`;

    const definedInfo = {
        label: 'Defined in plus',
        icon: '✔️',
        count: 0
    };

    const undefinedInfo = {
        label: 'Undefined',
        icon: '❌',
        count: 0
    };

    const rsInfo = {
        label: 'Recommended + Standard',
        icon: '✅',
        count: 0
    };

    const fixableInfo = {
        label: 'Fixable',
        icon: '🔧',
        count: 0
    };

    const stylisticInfo = {
        label: 'Stylistic',
        icon: '🎨',
        count: 0
    };

    const getRuleType = (item) => {
        const list = [];

        if (item.recommended || item.standard) {
            rsInfo.count += 1;
            list.push(rsInfo.icon);
        }

        if (item.fixable) {
            fixableInfo.count += 1;
            list.push(fixableInfo.icon);
        }

        if (item.stylistic) {
            stylisticInfo.count += 1;
            list.push(stylisticInfo.icon);
        }

        return list.join('');
    };

    const rows = Object.keys(allRules).map((key, i) => {

        const item = allRules[key];

        // console.log(item);
        const name = `[${key}](${item.url})`;

        const type = getRuleType(item);
        const enable = Boolean(type);

        let icon = '';
        let value = '';
        if (enable) {
            definedInfo.count += 1;
            icon = definedInfo.icon;
            if (item.link) {
                value = item.link;
            } else {
                const str = jsonToStr(item.value, 0, (s) => {
                    return s.replace(/`/g, '"');
                });
                value = `\`${str}\``;
                if (value.length > 36) {
                    value = `<details><summary>Details</summary>${value}</details>`;
                }
            }
        } else {
            undefinedInfo.count += 1;
            icon = undefinedInfo.icon;
            EC.logRed(`[${undefinedInfo.icon} undefined] ${undefinedInfo.count}: ${key} ${type}`);
        }

        return [i + 1, name, type, icon, value];
    });

    // override rules
    Object.keys(myOverrideRules).forEach((key) => {
        const orig = jsonToStr(allRules[key].originalValue);
        console.log(EC.yellow('[override]'), `${key}:`, EC.yellow(orig), '->', EC.cyan(jsonToStr(myOverrideRules[key], 0)));
    });


    const totalCount = rows.length;
    const legendTable = MG({
        columns: [{
            name: '',
            align: 'center'
        }, {
            name: 'Rules'
        }, {
            name: 'Count',
            align: 'right'
        }, {
            name: '',
            align: 'right'
        }],
        rows: [
            {
                icon: '',
                label: 'All rules',
                count: totalCount
            },
            definedInfo,
            undefinedInfo,
            rsInfo,
            fixableInfo,
            stylisticInfo
        ].map((it) => {
            const per = it.count === totalCount ? '' : `${(it.count / totalCount * 100).toFixed(1)}%`;
            return [it.icon, it.label, it.count, per];
        })
    });

    const title = `${os.EOL}${os.EOL}### Details  ${os.EOL}`;
    const rulesTable = MG({
        columns: [{
            name: '',
            align: 'right'
        }, {
            name: 'Rules',
            align: 'left'
        }, {
            name: 'Type',
            align: 'left'
        }, {
            name: 'Enabled',
            align: 'center'
        }, {
            name: 'Value',
            align: 'left'
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(import.meta.dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legendTable + title + rulesTable);
    const readmePath = path.resolve(import.meta.dirname, '../README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

};

const start = async () => {

    const date = new Date().toLocaleDateString();

    // =====================================================================================
    // all build-in rules
    const rules = {};
    const keys = Object.keys(builtInRules);
    for (const key of keys) {
        const rule = await builtInRules[key];
        // console.log(key, rule);
        rules[key] = rule.meta;
    }


    // =====================================================================================
    // save recommended rules
    const recommendedRules = recommended.rules;
    const recommendedJsonStr = jsonToContent(recommendedRules);
    const recommendedContent = `export default ${recommendedJsonStr};\n`;
    fs.writeFileSync(path.resolve(import.meta.dirname, '../lib/rules-recommended.js'), recommendedContent);

    Object.keys(recommendedRules).forEach((key) => {
        const item = rules[key];
        if (item) {
            item.recommended = true;
            item.value = recommendedRules[key];
        } else {
            EC.logRed(`not found recommended rule: ${key}`);
        }
    });

    // =====================================================================================
    // save standard rules
    const standardRules = standard.rules;
    const standardJsonStr = jsonToContent(standardRules);
    const standardContent = `export default ${standardJsonStr};\n`;
    fs.writeFileSync(path.resolve(import.meta.dirname, '../lib/rules-standard.js'), standardContent);

    Object.keys(standardRules).forEach((key) => {
        const item = rules[key];
        if (item) {
            item.standard = true;
            item.value = standardRules[key];
        } else {
            EC.logRed(`not found standard rule: ${key}`);
        }
    });


    // =====================================================================================
    // save stylistic rules
    const stylistic = await import('@stylistic/stylelint-config');
    const stylisticRules = stylistic.default.rules;
    const stylisticJsonStr = jsonToContent(stylisticRules);
    const stylisticContent = `export default ${stylisticJsonStr};\n`;
    fs.writeFileSync(path.resolve(import.meta.dirname, '../lib/rules-stylistic.js'), stylisticContent);

    const stylisticKeys = Object.keys(stylisticRules);
    for (const key of stylisticKeys) {
        const value = stylisticRules[key];
        const id = key.replace('@stylistic/', '');
        const item = await import(`../node_modules/@stylistic/stylelint-plugin/lib/rules/${id}/index.js`);

        rules[key] = {
            ... item.meta,
            stylistic: true,
            value
        };
    }

    // =====================================================================================

    Object.keys(myOverrideRules).forEach((key) => {
        rules[key].originalValue = rules[key].value;
        rules[key].value = myOverrideRules[key];
    });


    // save metadata
    // console.log(rules);

    const packageJson = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../node_modules/stylelint/package.json')).toString('utf-8'));
    const version = packageJson.version;

    const metadata = {
        version,
        date,
        rules
    };

    const rulesPath = path.resolve(import.meta.dirname, '../lib/metadata.json');
    fs.writeFileSync(rulesPath, jsonToStr(metadata));
    EC.logGreen(`generated metadata: ${rulesPath}`);

    // =====================================================================================
    checkRules(metadata);

};


start();
