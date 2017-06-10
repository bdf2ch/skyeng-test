var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, './src/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
        //CommonsChunkPlugin
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './src',
        port: 9000
    }
};