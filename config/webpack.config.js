module.exports = function(env) {
    let tempEnv = (!env || env === 'development') ? 'dev' : env;

    if (tempEnv === 'production') {
        tempEnv = 'prod';
    }

    return require(`./webpack.${tempEnv}.js`); // eslint-disable-line global-require, import/no-dynamic-require
};
