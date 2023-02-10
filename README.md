# stylelint-config-plus

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended) and [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [postcss-scss](https://github.com/postcss/postcss-scss) (*.scss)
- [postcss-html](https://www.npmjs.com/package/postcss-html) (*.html and *.vue)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order) with [stylelint-semantic-groups](https://github.com/theKashey/stylelint-semantic-groups)

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


## Changelog

- 1.0.2
    - updated for stylelint v15
    - fixed deprecated stylistic rules
