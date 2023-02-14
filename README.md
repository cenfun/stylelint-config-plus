# stylelint-config-plus

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) and [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [postcss-scss](https://github.com/postcss/postcss-scss) (*.scss)
- [postcss-html](https://www.npmjs.com/package/postcss-html) (*.html and *.vue)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) with [stylelint-semantic-groups](https://github.com/theKashey/stylelint-semantic-groups)
- [stylistic rules](#about-stylistic-rules)

## Install
```
npm i stylelint-config-plus -D
```

## Usage
```
//.stylelintrc.js
module.exports = {
    extends: ["stylelint-config-plus"]
};
```

## About Stylistic Rules
Unfortunately, stylistic rules were deprecated in stylelint v15 by Prettier

* https://github.com/stylelint/stylelint/pull/6504
* https://stylelint.io/migration-guide/to-15#deprecated-stylistic-rules

Don't know why but:

* We don't need to use Prettier because StyleLint and Eslint have done a good job in code formatter
* We will never use Prettier because so many tools are loaded in the front-end development, conflicts and troubles are more and more

So we need to resume use of stylistic rules in stylelint v15+


## Changelog

- 1.0.2
    - updated for stylelint v15
    - fixed deprecated stylistic rules
