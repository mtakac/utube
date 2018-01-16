module.exports = {
    webpackConfig: require('./config/webpack.config.js'), // eslint-disable-line global-require
    ignore: ['**/components/**/validations.js', '**/components/**/*.test.js', '**/components/form-field/**/*.js'],

    getExampleFilename(componentPath) {
        return componentPath.replace(/(\w+)\.jsx?$/, 'readme.md');
    }
};
