module.exports = function(env) {
    env = !env ? 'development' : env; // eslint-disable-line no-param-reassign

    return require(`./webpack.${env}.js`); // eslint-disable-line global-require, import/no-dynamic-require
};
