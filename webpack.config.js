'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = `${ROOT_PATH}/src`;
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
                    presets:
                        [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', {
                            legacy: true,
                        }],
                        ['@babel/plugin-proposal-class-properties', {
                            loose: true
                        }],
                        '@babel/plugin-transform-runtime',
                        // 'babel/plugin-transform-import',
                        // 'babel/plugin-add-module-exports',
                        // 'babel/plugin-react-require',
                        [
                            'babel-plugin-import', {
                                libraryName: 'antd',
                                // libraryDirectory: 'es',
                                style: true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(c|le)ss$/,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[hash:base64:5]',
                                context: SRC_PATH
                            },
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        }
                    }
                ]
            },
            {
                test: /\.(c|le)ss$/,
                include: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}