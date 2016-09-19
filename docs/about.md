# 关于目录说明

### Object versions: 1.0.0
#### src (项目主文件夹)
#### docs (文档文件夹)
#### .babelrc (babel 配置文件)
#### package.json （包配置文件）
#### server.json （服务配置文件）
#### webpack.config.js (webpack 模块配置文件)

#### TODO 有的配置文件不能写注释，以下是一些注释解释
#### http://www.jianshu.com/p/ff7e0de573a9 关于babel 说明的一个网址
#### http://cn.redux.js.org/ redux 中文官网
#### http://imweb.io/topic/567fe68e834878282edc7f9d redux 一些说明

### 各类报错说明
##### 开发环境报错Cannot read property 'indexOf' of undefined 原因： vue-hot-reload-api 的版本与 vue 的版本冲突 解决方法： 如果vue版本为1.X 那么重新安装 vue-hot-reload-api npm install --save-dev vue-hot-reload-api@^1.3.2 如果不指定默认安装最高版本了，这是个世坑

### package.json 说明
##### vue vue.js
##### babel-core 某些代码需要调用Babel的API进行转码
##### babel-preset-es2015 ES2015转码规则
##### babel-preset-stage-0 ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个，把后面的0直接替换
##### browser-sync 浏览器同步测试工具
##### webpack 
##### webpack-dev-server webpack 开发服务
##### webpack-hot-middleware 热更新
##### autoprefixer 自动浏览器前缀
##### html-webpack-plugin 生成多文件 文件中自动引入js css 文件等。
##### cross-env 解决跨平台设置NODE_EVN问题
