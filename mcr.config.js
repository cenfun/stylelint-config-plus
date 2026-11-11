export default {
    name: 'stylelint-config-plus coverage',
    test: ['./test/config.js', './test/compatibility.js', './test/test.js'],
    reports: ['v8', 'console-summary'],
    outputDir: './.temp/coverage-reports',
    entryFilter: {
        '**/node_modules/**': false,
        '**/src/**': true,
        '**/dist/**': true,
        '**': false
    }
};
