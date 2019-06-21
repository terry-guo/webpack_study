const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
    mode: "development",
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:'/'
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'../dist'),
        // open: true, // 是否打开浏览器
        // port: 8080
    }
});