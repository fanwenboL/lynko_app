'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        progress: true,
        overlay: true,
        hot: true,
        host: '127.0.0.1',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}