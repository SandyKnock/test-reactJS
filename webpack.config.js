const webpack = require("webpack");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HarddiskPlugin = require('html-webpack-harddisk-plugin')

let htmlWebpackPlugin = new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    filename: DIST_DIR + '/index.html',
    template: SRC_DIR + "/index.html",
    inject: 'body'
});


let extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    entry: [
        // 'react-hot-loader/patch',
        SRC_DIR + '/app/index.js'
    ],
    resolve: {
        alias: {
            // img: SRC_DIR + "/media/img"
            img: path.join(__dirname, "src/media/img")
        }
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    devServer: {
        inline: true,
        hot: true,
        historyApiFallback: true,
        open: true,
        contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            {
                test: /\.css$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "../fonts/img/"
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "../media/img/"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.(c|d|t)sv$/,
                use: ['dsv-loader?delimiter=;'],


            }

        ]
    },

    plugins: [
        extractSass,
        htmlWebpackPlugin,
        new HarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};

module.exports = config;
