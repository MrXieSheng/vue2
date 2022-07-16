const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导出webpack配置对象
module.exports = {
  // mode: 'development', // 开发环境
  mode: 'production', // 生产环境
  // webpack入口
  entry: './src/main.js',
  output: {
    // path必须用绝对地址: path.resolve()拼接2个路径
    // __dirname: node内置全局变量(值: 当前文件所在文件夹的绝对路径)
    path: path.resolve(__dirname, 'dist'),
    // webpack出口文件
    filename: 'bundle.js'
  },
  // 插件
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html' // webpack生成dist/html网页, 要以template指定的文件作为模板
  })],
  // 加载器
  module: {
    rules: [ // 规则数组
      { // 一个规则对象
        test: /\.css$/i, // 匹配.css文件
        use: ["style-loader", "css-loader"],
        // 加载器会从右向左使用
        // css-loader -> 识别.css文件, 代码打包进js中
        // style-loder -> 把js里样式代码, 插入到DOM中
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // less-loader 识别.less文件 -> less文件和less语法 -> css
        // css-loader 识别css -> 打包进js中
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset' // asset模式, 会在复制文件到dist下 和 图片文件转base64之间根据图片大小自动选择
      },
      // 识别字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',  // 当做静态资源直接复制文件
        generator: {
          filename: 'font/[name].[hash:6][ext]' // 放到dist/font文件夹, 文件名格式如左
        }
      },
      // 设置babel降级js语法
      {
        test: /\.m?js$/, // 匹配.mjs或.js结尾文件
        exclude: /(node_modules|bower_components)/, // 排除node_modules第三方包里面js文件 -> 别人写的(如果你下载jq3.x版本, 你就已经决定不兼容ie6, 也没有jq降级)
        use: {
          loader: 'babel-loader', // 允许webpack使用babel降级编译js代码
          options: {
            presets: ['@babel/preset-env'] // 使用这个包里记录的规则
          }
        }
      }
    ],
  },
  devServer: { // 开发服务器配置
    port: 3000, // 端口号
    open: true // 自动唤起默认浏览器
  }
};

// 口诀:
// 找装备, 下装备, 穿装备, 打包使用