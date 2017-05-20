/*
 * @Author: techer
 * @Date:   2017-03-30 18:50:53
 * @Last Modified by:   techer
 * @Last Modified time: 2017-03-31 10:08:50
 */

'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',

    resolve: {
        alias: {
            src: path.resolve( __dirname, '../src' ),
            modules: path.resolve( __dirname, '../node_modules' ),
            Vue: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.ts', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    //minimize: true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    hash: 'sha512',
                    publicPath: '/',
                    name: 'assets/images/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(eot|woff)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
