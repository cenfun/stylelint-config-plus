# stylelint-config-plus

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) and [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [postcss-scss](https://github.com/postcss/postcss-scss) (*.scss)
- [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html) (*.html and *.vue)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) with [stylelint-semantic-groups](https://github.com/theKashey/stylelint-semantic-groups)
- [@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin)

## Install
```
npm i stylelint-config-plus -D
```

## Usage
```js
// stylelint.config.js
module.exports = {
    extends: ["stylelint-config-plus"]
};
```

## Changelog

- 1.1.1
    - fixed @stylistic/stylelint-plugin

- 1.0.3
    - added stylelint-stylistic

- 1.0.2
    - updated for stylelint v15
    - fixed deprecated stylistic rules
