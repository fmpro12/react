var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"       
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,               
            },     
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },       
        ]
    },
    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin(),
    ],

    

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        publicPath:'/dist/',
        proxy: {
            "/api": "http://localhost:9090"
        }
    }
};