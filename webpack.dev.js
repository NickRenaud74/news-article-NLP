const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            //Simulate the removal of files
            dry: true,
            //Write logs to console
            verbose: true,
            //Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}