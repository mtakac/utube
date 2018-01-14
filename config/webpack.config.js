module.exports = function(env) {
    const tempEnv = (!env || env === 'development') ? 'dev' : env;

    return require(`./webpack.${tempEnv}.js`); // eslint-disable-line global-require, import/no-dynamic-require
};
