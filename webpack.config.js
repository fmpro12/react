var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            {
                test: /\.jpg$/,
                use: {
                    loader: "file-loader",
                    query: {
                        name: "[name]-[hash].[ext]"
                    }
                },
            }
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