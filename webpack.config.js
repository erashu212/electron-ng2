var webpack = require("webpack");
var progressBarPlugin = require('progress-bar-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        "vendor": "./src/vendor",
        "app": "./src/main"
    },
    output: {
        path: __dirname,
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: [path.join(__dirname, 'build'), path.join(__dirname, 'node_modules')]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new progressBarPlugin()
    ]
}
