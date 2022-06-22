const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { celanWebpackPlugin, CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    devtool: 'inline-source-map',
    entry: ["./script/index.js", "@babel/polyfill"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: "./dist",
        liveReload: true,
        hot: true
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.sass$/,
                use: ["css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "./node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, "./node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: path.resolve(__dirname, "./node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: path.resolve(__dirname, "./node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
                    }
                }
            },
        ]
    }
}