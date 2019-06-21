const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //清理 /dist 文件夹
const webpack = require('webpack');
// const _ = require("lodash")
module.exports = {
    entry:{ // 入口文件
        index:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path:path.resolve(__dirname,'../dist'),
        // publicPath:'/'
    },
    plugins:[
        new CleanWebpackPlugin(), //清空dist目录文件
        new HtmlWebpackPlugin({
            title:"小鱼干的webpack练习"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ //导入全局模块变量
            _:"lodash", //项目中可以不需要引入lodash直接使用 _
        }),
        new webpack.DefinePlugin({ //导入全局变量
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    // optimization: { //将 lodash 分离到单独的 chunk,webpack4开始用optimization
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons", //生成的共享模块bundle的名字
    //                 chunks: "initial", //只选择初始的chunks
    //                 minChunks: 2, //有共享模块的chunks的最小数目 ，默认值是1
    //             }
    //         }
    //     }
    // },
 
    // mode: "production",
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'cvs-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    }
}