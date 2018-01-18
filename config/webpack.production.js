const Webpack = require('webpack');
const Merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const webpackCommon = require('./webpack.common.js');

module.exports = Merge(webpackCommon, {
    devtool: 'source-map',
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new Webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    output: {
        filename: '[name].[hash].js'
    }
});
