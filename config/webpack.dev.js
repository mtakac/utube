const Webpack = require('webpack');
const Path = require('path');
const Merge = require('webpack-merge');

const webpackCommon = require('./webpack.common.js');

const rootFolder = Path.resolve(__dirname, '../');

module.exports = Merge(webpackCommon, {
    devServer: {
        contentBase: Path.resolve(rootFolder, 'dist'),
        hot: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[hash].js'
    }
});
