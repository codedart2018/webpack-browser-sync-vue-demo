/**
 * Created by jtq19 on 2016/9/7.
 * webpack 配置文件
 */
'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const minPostfix = isProd ? '.min' : '';
const hash = '[hash:8]';

/**
 * @入口文件
 * 1.当entry是一个字符串的时候用来定义入口文件。
 * 例：entry: './js/main.js'
 * 2.当entry是个数组的时候，里面同样包含入口js文件，另外一个参数可以是用来配置webpack提供的一个静态资源服务器，webpack-dev-server。
 * webpack-dev-server会监控项目中每一个文件的变化，实时的进行构建，并且自动刷新页面。如下配置
 * 3.当entry是个对象的时候，我们可以将不同的文件构建成不同的文件，按需使用，比如在我的hello页面中只要\<script src='build/Profile.js'></script>引入hello.js即可。
 * entry: {
 *    hello: './js/hello.js',
 *    form: './js/form.js'
 * }
 *
 */
const entry = './src/main.js';
const devEntry = [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    entry,
];
/**
 * 构建后文件的输出目录
 */
const outputPath = 'dist';

/**
 * @插件
 */
const basePlugins = [
    //设置环境变量（默认值为development）
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    //自动在项目首页加上需要的内容 比如JS引入就不必了
    new HTMLWebpackPlugin({
        title: 'webpack-browser-sync-vue-demo',
        template: 'src/index.html',
        // inject: false,
        prod: isProd,
        minify: isProd ? {
            removeComments: true,
            collapseWhitespace: true
        } : null,
    }),
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
];

const envPlugins = isProd ? [
    // ExtractTextPlugin 分离CSS文件
    new ExtractTextPlugin(`css/style.${hash}${minPostfix}.css`, {
        allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.BannerPlugin(`build: ${new Date().toString()}`),
] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // @see https://www.npmjs.com/package/eslint-loader#noerrorsplugin
    new webpack.NoErrorsPlugin(),
];

/**
 * @关于模块的加载相关
 */
module.exports = {
    debug: !isProd,
    //devtool: !isProd ? '#eval' : null,
    //配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    //入口文件
    entry: isProd ? entry : devEntry,
    //输出目录 输出文件带 hash数字 如果输出多个 可以循环来着
    output: {
        path: path.join(__dirname, outputPath),
        filename: `js/app.${hash}${minPostfix}.js`,
        publicPath: '/'
    },
    module: {
        // 一些特定的编译规则
        loaders: [
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.js$/,
                // 通过babel转换
                loader: 'babel',
                // 不用转换的node_modules文件夹
                exclude: /node_modules/
            },
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.vue'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        //alias: {}
    },
    plugins: basePlugins.concat(envPlugins),
    //浏览器前缀
    postcss: [autoprefixer({browsers: ['> 1%', 'last 2 versions', 'ie 10']})]
};
