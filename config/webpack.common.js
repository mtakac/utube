const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootFolder = Path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: Path.resolve(rootFolder, 'src', 'index.js')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.svg$/,
            use: ['svg-inline-loader']
        }]
    },
    resolve: {
        modules: ['node_modules', './src'],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'), // eslint-disable-line
            title: 'Utube',
            appMountId: 'app'
        }),
        new CleanWebpackPlugin(['dist'], { root: rootFolder }),
        new Webpack.HashedModuleIdsPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    output: {
        path: Path.resolve(rootFolder, 'dist')
    }
};
