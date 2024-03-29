const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //清理 /dist 文件夹
const webpack = require('webpack');

module.exports = {
    entry:{ // 入口文件
        app:'./src/index.js'
    },
    devtool: 'inline-source-map', //原始源代码
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"HtmlWebpackPlugi输出名称"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    // mode: "production",
    module:{
        loaders: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        }] , 
        rules:[
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