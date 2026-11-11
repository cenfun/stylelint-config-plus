## Changelog

- 1.3.0
    - updated to Stylelint 18, stylelint-config-recommended 19 and stylelint-config-standard 41
    - updated to Stylistic 6 and regenerated rule settings, metadata and documentation
    - migrated build metadata collection to public Stylelint and Stylistic APIs
    - added SCSS namespace rules for SCSS files and every embedded file type supported by stylelint-config-html, retaining four-space indentation
    - preserved existing CSS property-value validation without adding global v-bind() exemptions
    - adopted the upstream recommended always-multi-line semicolon policy without wrapping plugin rules: single-line inline styles stay single-line and existing multi-line styles retain newline formatting
    - removed the previous always-semicolon-newline override; ordinary CSS/SCSS blocks follow the recommended declaration limit and newline rules
    - added regressions for single-line/multi-line inline styles, embedded SCSS, customized declaration limits, disable comments and property-value validation
    - added Stylelint ^18.0.0 peer dependency and Node.js ^22.22.2 || ^24.15.0 || >=26.0.0 requirement
    - added ESM/CommonJS formatting tests, upstream rule checks and release validation scripts
    - migrated tests to the Node.js test runner via mcr test, added V8 coverage reports and removed Mocha
    - updated dependencies
    - compatibility note: requires newer Node.js/Stylelint versions and may change lint results and autofixes

- 1.2.0
    - added ESM and CommonJS support
    - moved source files from `lib` to `src`
    - added esbuild output in `dist`
    - updated stylelint-config-html to v2
    - updated dependencies

- 1.1.4
    - updated stylelint v17

- 1.1.3
    - fixed at-rules for scss

- 1.1.2
    - fixed dependencies

- 1.1.1
    - fixed @stylistic/stylelint-plugin

- 1.0.3
    - added stylelint-stylistic

- 1.0.2
    - updated for stylelint v15
    - fixed deprecated stylistic rules