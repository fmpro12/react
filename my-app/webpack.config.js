var path = require('path');
var webpack = require('webpack');
 module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
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
    mode: "development",	

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:9090"
        }
    }
};