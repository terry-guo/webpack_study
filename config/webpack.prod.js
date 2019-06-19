const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack')

 module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true //使用源映射将错误消息位置映射到模块（这会减慢编译速度）,默认：false
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("production")
        })
    ]
});