/**
 * Created by jtq19 on 2016/9/7.
 * 服务文件
 */

'use strict';

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);
const bs = browserSync.create();

//关于browser-sync 详情官网：http://www.browsersync.cn/ 这是个好东西多端同时协同工作
bs.init({
    logPrefix: 'AMT',
    server: {
        //指定服务器启动根目录
        //baseDir: [
            //'dist',
        //],
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {colors: true}
            }),
            webpackHotMiddleware(bundler)
        ]
    },
    //指定端口
    port: 3000
});
