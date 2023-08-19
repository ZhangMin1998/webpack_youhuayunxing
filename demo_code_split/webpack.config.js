const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // 单入口
  // entry: './src/main.js',
  // 多入口:配置了几个入口，至少输出几个 js 文件
  entry: {
    main: './src/main.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    clean: true,
    // [name]是webpack命名规则，使用chunk的name作为输出的文件名。
    // 什么是chunk？打包的资源就是chunk，输出出去叫bundle。
    // chunk的name是啥呢？ 比如： entry中xxx: "./src/xxx.js", name就是xxx。注意是前面的xxx，和文件名无关。
    // 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "public/index.html"),
      // filename: 'main.html',
      // chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "public/app.html"),
    //   filename: 'app.html',
    //   chunks: ['app']
    // })
  ],
  mode: "production",
}