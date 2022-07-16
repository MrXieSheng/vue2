# Day00_webpack

## 铺垫(自学必学)

### yarn包管理器

快速、可靠、安全的依赖管理工具。(类似npm作用, 取代npm在Node环境下做包管理器)

中文官网地址: https://yarn.bootcss.com/

注意: win7同学, node不要用13开头版本, 会影响yarn使用

### 下载yarn

下载地址:  https://yarn.bootcss.com/docs/install/#windows-stable 

* windows - 软件包(在笔记文件夹里)

  * ==不要安装到中文路径下==
  * ==建议和node安装到一个盘符下==

* mac - 通过命令安装(也可还用npm)

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

如果不行, 就用这个命令安装

```bash
npm i yarn -g
```



### 使用yarn

与npm类似, 可以试试, 新建一个**空白文件夹**, 执行以下命令尝试一下

```bash
# 1. 初始化, 得到package.json文件(终端路径所在文件夹下)
yarn init
# 类似: npm init

# 2. 添加依赖(下包)
# 语法: yarn add [package]
# 语法: yarn add [package]@[version]
yarn add jquery
yarn add jquery@3.5.1
# 类似: npm install jquery

# 3. 移除包
# 语法: yarn remove [package]
yarn remove jquery
# 类似: npm remove jquery
             
# 4. 安装项目全部依赖(一般拿到别人的项目时, 缺少node_modules)          
yarn
# 会根据当前项目package.json记录的包名和版本, 全部下载到当前工程中
# 类似: npm i

# 5. 全局
# 安装: yarn global add [package]
# 卸载: yarn global remove [package]
# 注意: global一定在add左边
yarn global add @vue/cli
# 如何使用, 为明天学习vue做铺垫
# 类似: npm install -g @vue/cli 
```

### yarn可能遇到的问题

如果报错参考报错文档: https://lidongxuwork.gitee.io/error/#811

## 建议安装的vscode插件

> 文件夹和文件的关系, 和该创建文件, 不要创建文件夹了

![1632318934691](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/001_vscode插件.png)



## 知识点自测

对这些知识点了如指掌, 学习今天的内容会轻松很多

- [ ] 如何使用ES6模块化
- 默认导出和导入

```js
// 默认导出
export default {
    a: 10,
    b: 20
}

// 默认导入
import Obj from 'js文件路径'
```

* 按需导出和导入

```js
// 按需导出
export {
	a: 10,
	b: 20
}
// 按需导入
import {a, b} from 'js文件路径'
import * as Obj from 'js文件路径' // 搜集*所有按需导出, 合并到变量obj中
```

* 无导出和导入(只为让js代码执行)

```js
// 无导出
Array.prototype.MyForEach = function(){
    // ...内部实现略
}

// 无导入
import "js文件路径"

// 后面用数组就可以调用MyForEach方法了
```

- [ ] 字体图标的使用
  1. 去阿里巴巴矢量图标库, 选中想要的图标, 登录后, 生成css文件和字体文件
  2. 下载css文件和字体文件, 也可以使用在线地址
  3. 在自己页面中引入iconfont.css, 并在想显示字体图标的标签上使用类名即可

- [ ] ==箭头函数非常熟练, 伸手就写==

```js
// 1. 基础定义
const fn = () => {}   
fn()

// 2. 有参, 有返回值
const fn2 = (a, b) => {return a + b} 
fn(10, 20); // 结果是30

// 3. 参数"只有一个", 省略()
const fn3 = a => {return a * 2}
fn(50); // 结果是100

// 4. 函数体"只有一句"可以省略大括号和return, "默认返回这句话结果"给函数调用地方
const fn4 = a => a * 2;
fn(50); // 结果是100
```

- [ ] 什么是服务器, 本地如何搭建服务器,  服务器和浏览器关系, 什么是请求和响应

```js
// 1. 什么是服务器
// 服务器是一台性能高, 24小时可以开机的电脑
// 服务器可以提供服务(例如: 文件存储, 网页浏览, 资源返回)

// 2. 本地如何搭建服务器
// 安装node软件环境, 下载express模块包, 编写相关代码, 即可得到一个web服务器, 给前端返回资源

// 3. 服务器和浏览器的关系
// 浏览器不负责保存网页, 都要靠着url地址去服务器后端, 请求网页相关代码, 回来在浏览器上解析显示
// 浏览器也不负责保存数据, 如果是前后端分离项目, 也要用ajax调用后端接口, 拿到数据回到浏览器上铺设显示

// 4. 请求和响应区别
// 浏览器 -> 请求资源 -> 服务器

// 浏览器 <-  响应数据 <- 服务器
```

- [ ] 开发环境 和 生产环境 以及英文"development", "production" 2个单词会写会读

- [ ] 初始化包环境和package.json文件作用

```js
// npm下载的包和对应版本号, 都会记录到package.json文件里
// 把项目发给别人, 他也用包管理器, 一个命令就能下载你项目需要的所有第三方依赖包
```

- [ ] 终端的熟练使用: 切换路径, 清屏, 包下载命令等

```js
切换路径  cd 命令

清屏 cls 或者 clear
```

- [ ] 对base64字符串, 图片转base64字符串了解

  在线装换图片http://tool.chinaz.com/tools/imgtobase/

## 今日学习目标

1. 能够理解webpack基本概念和作用

2. 能够掌握webpack使用步骤

3. 能够使用webpack相关配置

4. 能够使用webpack开发服务器

5. 能够使用webpack中文文档

## 01.webpack-概念

### 目标

为何学webpack

什么是webpack

### 讲解

#### 场景

写完的项目代码, 手动优化, 甚至把回车和变量名都换掉, 缩小体积, 加快浏览器打开速度

![image-20211106211332002](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/002_代码压缩效果.png)

自动化: 可以用node+webpack来**分析**, **翻译**, **压缩**, **打包**, ==加快浏览器打开速度==

![1627289735578](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/003_webpack打包前效果.png)

![1627289742417](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/004_webpack打包后效果.png)

#### 概念

[webpack官网](https://webpack.docschina.org/)

- 现代 javascript 应用程序的 **静态模块打包器 (module bundler)**

  * 静态: 文件资源
  * 模块: node环境, 引入文件, 遵守模块化语法

  

- 除了合并代码, 还可以**翻译**和**压缩**代码

  - less/sass     -> css
  - ES6/7/8       -> ES5
  - html/css/js -> 压缩合并

![image-20210207234927772](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/005_webpack概念图示.png)

### 小结

1. 什么是webpack?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>静态模块打包器</li>
   <li>还能翻译和压缩代码</li>
   <li>减小代码包体积, 让浏览器更快速打开网页</li>
   </ul> 
   </details>



## 02.webpack-使用前-准备

### 目标

用webpack, 需要准备什么

### 讲解

#### 软件

webpack依赖**Node环境**

**npm或yarn**等模块管理工具

#### 步骤

1. 创建**Day01_webpack基础使用**文件夹
2. 初始化包环境

```js
yarn init
```

3. 安装依赖包

   > 为何指定版本: 防止以后包更新, 造成课程内容报错

```bash
yarn add webpack webpack-cli -D
```

4. 在package.json中, 配置scripts(自定义命令)

```bash
scripts: {
	"build": "webpack"
}
```

### 小结

1. 使用webpack前, 准备什么?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>Node环境软件</li>
   <li>npm或yarn模块管理器</li>
   <li>项目文件夹和包环境</li>
   <li>下载webpack并配置命令</li>
   </ul> 
   </details>



## 03.webpack-基础使用

### 目标

学习webpack使用, 打包2个js文件

### 讲解

#### 步骤

1. 新建src/add/add.js - 定义求和函数导出

```js
export const addFn = (a, b) => a + b
```

2. 新建src/index.js导入使用

```js
// webpack打包的入口
import { addFn } from './add/add'
console.log(addFn(5, 2));
```

3. 运行打包命令

```bash
yarn build
```

#### 效果

1. src并列处, 生成dist目录和main.js文件

2. 查看main.js文件, 是打包压缩后的代码

```js
(()=>{"use strict";console.log(7)})();
```

3. 打包关系图

![1627448159455](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/006_webpack打包流程图.png)

### 小结

1. webpack如何使用?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>先下载安装webpack, 配置打包命令</li>
   <li>默认入口src/index.js-要被打包的文件, 要引入到这里使用</li>
   <li>输入yarn build打包命令(实际是项目环境webpack命令)</li>
   <li>输出代码到dist/main.js中</li>
   </ul> 
   </details>



## 04.webpack-更新打包

### 目标

 代码变化, 如何打包

### 讲解

#### 步骤

1. 新建src/tool/tool.js - 导出数组求和方法

   > 如果不太会reduce: 看这里讲解: https://www.bilibili.com/video/BV1kf4y1w7tp

```js
export const getArraySum = arr => arr.reduce((sum, val) => {
   return sum = sum + val;
}, 0)
```

2. src/index.js - 导入使用

```js
import { addFn } from './add/add'
import { getArraySum } from './tool/tool'

console.log(addFn(5, 2));
console.log(getArraySum([5, 6, 9, 10]));
```

3. 重新打包

```bash
yarn build
```

#### 效果

1. 自动覆盖原dist,  结果压缩极致

```js
(()=>{"use strict";console.log(7),console.log([5,6,9,10].reduce(((o,e)=>o+e),0))})();
```

![1627450857686](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/007_webpack打包流程图_更新情况.png)

### 小结

1. 代码增加后如何打包?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>要和src/index.js有直接或间接的引入关系</li>
   <li>重新执行yarn build</li>
   </ul> 
   </details>



## 05.webpack-配置修改

### 目标

**修改默认**入口和出口

默认入口: src/index.js

默认出口: dist/main.js

### 讲解

[配置文档](https://webpack.docschina.org/concepts/#entry)

1. 项目根目录 - 新建webpack.config.js文件 (默认配置文件名)
2. 填入配置项

```js
const path = require("path")

module.exports = {
    entry: "./src/main.js", // enter: 默认入口
    output: { 
        path: path.join(__dirname, "dist"), // 出口"文件夹"名
        filename: "bundle.js"               // 出口"文件"名
    }
}
```

3. 修改代码里src/index.js 为 **src/main.js**
4. 重新打包观察**输出文件名**字

### 小结

1. webpack默认入口和出口是什么?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>默认入口src/index.js</li>
   <li>默认出口dist/main.js</li>
   </ul> 
   </details>

2. webpack默认配置文件名?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>webpack.config.js</li>
   </ul> 
   </details>



## 06.webpack-打包流程图

### 目标

运行yarn build发生了什么

### 讲解

图解流程

1. 敲击命令, 代码执行过程

![image-20210421125257233](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/008_webpack打包完整流程.png)

2. 代码源文件和webpack之间关系图

   > 源码一定要和入口产生直接/间接引入关系, 才会被一起打包
   
   比如: request.js 就是间接引入

![1627471544248](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/009_webpack打包流程图_再次更新.png)

### 小结

1. 简述总结下打包流程?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>执行局部webpack命令(前提项目中下载了webpack包)</li>
   <li>有webpack.config.js用, 否则用内置默认</li>
   <li>根据入口建立引入关系</li>
   <li>编译翻译整合打包输出到指定位置</li>      
   </ul> 
   </details>

2. 模块想要被webpack识别打包, 要注意什么?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>模块文件要和webpack入口产生直接或间接引入关系</li>
   </ul> 
   </details>



## 07.webpack-案例-隔行变色

### 目标

webpack打包前端项目

yarn下的包, 如何作用在前端项目

### 讲解

#### 步骤

1. 下载jquery

```js
yarn add jquery
```

2. 新建public/index.html - 前端首页

![image-20210208100817930](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/010_webpack案例_准备html文件.png)

3. index.html 准备一些li

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

<div>
  <!-- ul#myUL>li{我是第$个li}*10 -->
  <ul id="myUL">
    <li>我是第1个li</li>
    <li>我是第2个li</li>
    <li>我是第3个li</li>
    <li>我是第4个li</li>
    <li>我是第5个li</li>
    <li>我是第6个li</li>
    <li>我是第7个li</li>
    <li>我是第8个li</li>
    <li>我是第9个li</li>
  </ul>
</div>

</body>
</html>
```

4. 在src/main.js引入jquery

```js
import $ from 'jquery'
```

5. main.js中编写, 隔行变色代码

```js
$(function() {
  $('#myUL>li:nth-child(2n+1)').css('color', 'red')
  $('#myUL>li:nth-child(2n)').css('color', 'green')
})
```

6. 执行打包命令

```bash
yarn build
```

7. 把public/index.html**手动**复制到dist下

![image-20210421125602484](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/011_webpack打包后_手动复制html到dist下.png)

8. 再**手动**引入打包后bundle.js

```vue
<script src="../dist/bundle.js"></script>
```

#### 关键

1. yarn下的包, 在js文件里, 用import语法导入

   > 浏览器不支持import语法

2. webpack翻译打包后输出到bundle.js
3. html页面引入翻译打包后的js即可正常使用

![1627556803300](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/012_webpack打包后_如何运行.png)

### 小结

1. 前端项目如何使用yarn下的包?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>借助webpack, 把模块和代码打包</li>
   <li>把打包后js文件, 引入到html执行查看效果</li>
   </ul> 
   </details>



## 08.webpack-插件-自动生成html文件

### 目标

学习webpack插件html-webpack-plugin

自动生成html文件

自动引入打包后文件

### 讲解

#### 步骤

[html-webpack-plugin插件文档](https://www.webpackjs.com/plugins/html-webpack-plugin/)

  1. 下载插件

     ```bash
     yarn add html-webpack-plugin  -D
     ```

  2. webpack.config.js配置

     ```js
     // 引入自动生成 html 的插件
     const HtmlWebpackPlugin = require('html-webpack-plugin') 
     
     module.exports = {
         // ...省略其他代码
         plugins: [
             new HtmlWebpackPlugin({
                 // 以此为基准生成打包后html文件
                 template: './public/index.html' 
             })
         ]
     }
     ```

3. 重新打包后观察dist下

   * 自动生成html文件
   * 自动引入打包后js文件

> 总结: webpack就像一个人, webpack.config.js是人物属性, 给它穿什么装备它就干什么活

### 小结

1. 自动生成html和引入打包后文件, 如何做?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>下载html-webpack-plugin插件包, 给webpack.config.js配置上</li>
   </ul> 
   </details>



## 09.webpack-加载器-处理css文件问题

### 目标

webpack能否打包css文件

### 讲解

#### 步骤

1.新建 - src/css/index.css

2.编写去除li圆点样式代码

```css
li{
    list-style: none;
}
```

3.==在main.js引入index.css==

> 一定要引入到入口才会被webpack打包

```js
import "./css/index.css"
```

4.执行打包命令观察效果

> 错误解释: 你可能需要一个loader来支持这种类型文件, 解析css代码
>
> 原因: webpack默认只识别js文件

![1627617044316](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/013_webpack打包后_css报错.png)

### 小结

1. 为何webpack打包css文件会报错呢?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>不能, 因为webpack默认只识别js文件</li>
   </ul> 
   </details>



## 10.webpack-加载器-处理css文件

### 目标

学习loader加载器, 打包更多类型文件

### 讲解

#### 步骤

[style-loader文档](https://webpack.docschina.org/loaders/style-loader/)

[css-loader文档](https://webpack.docschina.org/loaders/css-loader/)

1. 安装依赖

   > 需要这2个模块包, 帮助webpack打包css

   ```bash
   yarn add css-loader style-loader  -D
   ```

2. webpack.config.js 配置

   ```js
   module.exports = {
       // ...其他代码
       module: { // 如何处理项目中不同模块文件
           rules: [ // 规则
             {
               test: /\.css$/, // 匹配所有的css文件
               // use数组里从右向左运行
               // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
               // 再用 style-loader 将样式, 把css插入到dom中
               use: [ "style-loader", "css-loader"]
             }
           ]
       }
   }
   ```

3. 执行打包命令, 观察打包后dist下

#### 效果

1. css代码被打包进了dist/bundle.js中
2. 运行时, css代码插入到html的style标签中

### 小结

1. webpack如何支持css打包？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>使用style-loader和css-loader</li>
   </ul> 
   </details>

2. style-loader和css-loader作用?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>css-loader让webpack识别.css文件, 打包代码到js中</li>
   <li>style-loader把js中的css代码, 插入到style标签里显示</li>   
   </ul> 
   </details>

3. 打包后样式在哪里？如何生效?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>打包后样式在.js文件中</li>
   <li>运行后, 被插入到style标签里</li>   
   </ul> 
   </details>



## 11.webpack-加载器-处理less文件

### 目标

学习less-loader处理.less文件

### 讲解

[less-loader文档](https://webpack.docschina.org/loaders/less-loader/)

1. 新建src/less/index.less  - 设置li字体大小24px

```less
@size:24px;

ul, li{
    font-size: @size
}
```

2. 引入到main.js中

```js
import "./less/index.less"
```

3. 下载依赖包


```bash
yarn add less less-loader -D
```

4. webpack.config.js 配置

```js
module: {
  rules: [ 
    // ...省略其他
    {
    	test: /\.less$/, // 匹配.less结尾文件
    	// 使用less-loader, 让webpack处理less文件, 内置还会用less模块, 翻译less代码成css代码
        use: [ "style-loader", "css-loader", 'less-loader']
    }
  ]
}
```

> 总结: 只要找到对应的loader加载器, 就能让webpack处理不同类型文件

### 小结

1. webpack如何支持less打包？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>下载less和less-loader2个包</li>
   <li>less-loader识别less文件</li>   
   <li>less是翻译less代码到css代码</li>   
   </ul> 
   </details>

2. less翻译后, 还要注意什么?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>还要用css-loader把css代码进js中</li>
   <li>style-loader, 把css代码插入到DOM上</li>
   </ul> 
   </details>



## 12.webpack-加载器-处理图片文件

### 目标

配置webpack, 打包图片文件

### 讲解

#### 步骤

1. 素材文件夹/2个图文件
2. 在css/less/index.less - 把**小图片**用做背景图

```less
body{
    background: url(../assets/logo_small.png) no-repeat center;
}
```

3. 在src/main.js - 把**大图**插入到创建的img标签上, 添加body上显示

```js
// 引入图片-使用
import imgUrl from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)
```

#### 配置

webpack5内置处理方案, 只需要填入配置即可

[asset module资源模块文档](https://webpack.docschina.org/guides/asset-modules/)

1. webpack.config.js填写

```js
module: {
    rules: [ 
        // ...省略其他
        {
            test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
            type: 'asset' // 在导出一个 data URI 和一个单独的文件之间自动选择
        }
    ]
}

```

2. 打包后运行dist/index.html观察区别

### 小结

1. webpack如何支持图片打包？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>webpack5内置了, 只需要配置type:'asset'</li>  
   </ul> 
   </details>




## 13.webpack-加载器-图片处理区别

### 目标

为何图片要分2种情况处理

### 讲解

1. asset模块区分

```js
module: {
    rules: [ 
        // ...省略其他
        {
            test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
            type: 'asset' // 在导出一个 data URI 和一个单独的文件之间自动选择
            // 小于8kb的, 转成data URI(图片转成base64字符串打包进js中)
            // 大于8kb的, 直接复制文件到dist目录下(因为转base64会体积增30%)
        }
    ]
}

```

### 小结

1. 对图片有哪两种处理方案？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>默认8kb以下图片, 转成base64字符串打包进js中, 减少网络请求次数</li>
   <li>超过8kb的图片, 直接复制到dist下, 转base64会增加30%体积</li>  
   </ul> 
   </details>



## 14.webpack-加载器-处理字体文件

### 目标

webpack如何处理字体文件

### 讲解

#### 步骤

1. 素材文件夹/字体库fonts文件夹
2. 在main.js引入iconfont.css

```js
// 引入字体图标文件
import './assets/fonts/iconfont.css'
```

3. 在public/index.html使用字体图标样式

```html
<i class="iconfont icon-weixin"></i>
```

#### 配置

> webpack5, 用asset module技术

webpack.config.js

```js
{ 
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    type: 'asset/resource',  // 当做静态资源直接复制文件
    generator: {
    	filename: 'font/[name].[hash:6][ext]' // 放到dist/font文件夹, 文件名格式如左
    }
}
```

### 小结

1. webpack如何处理字体文件?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>在webpack.config.js的rules里针对字体图标文件类型设置asset/resource，直接输出到dist下</li>
   </ul> 
   </details>



## 15.webpack-加载器-处理高版本js语法

### 目标

让webpack, 对高版本js语法降级

### 讲解

#### 介绍

babel编译器=> 用于处理高版本 js语法 的兼容性  [babel官网](https://www.babeljs.cn/)

webpack配合babel-loader 对js语法做处理 [babel-loader文档](https://webpack.docschina.org/loaders/babel-loader/)

#### 步骤

1. src/main.js - 编写箭头函数

```js
const fn = () => { // 高级语法
  console.log("你好babel");
}
console.log(fn) // 一定打印函数, 才会被webpack把"函数体"打包起来
```

2. 安装包

```bash
yarn add -D babel-loader @babel/core @babel/preset-env
```

3. webpack.config.js 配置规则

```js
module: {
    rules: [
        {
            test: /\.js$/, // 匹配js结尾文件
            exclude: /(node_modules|bower_components)/, // 不转换这2个文件夹里的js
            use: { 
                loader: 'babel-loader', // 使用加载器-处理
                options: {
                    presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                }
            }
        }
    ]
}
```

4. 打包后观察dist/的js文件, 自动变成普通函数

### 小结

1. webpack如何帮助我们降低js版本语法？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>借助babel-loader和babel编译器，给webpack配置上, 翻译再打包使用</li>
   </ul> 
   </details>



## 16.webpack-开发服务器-为何学

### 目标

开发时, 快速自动打包查看效果

### 讲解

#### 问题

每次修改代码, 重新打包, 才能看到最新的效果

实际工作中, 打包非常费时 (10-20s) 之间, 影响开发效率

#### 原因

1. 构建入口和所有模块依赖关系图
2. 磁盘读取对应的文件到内存, 才能加载  
3. 用对应的 loader 进行处理和翻译  
4. 将处理完的内容, 输出到磁盘指定文件内
5. 以后代码变化, **从1重新开始**

#### 代码演示

复制上一个项目

写几行代码, 想要看打包后运行效果, 打包ing....

又改了几行代码, 想看打包后运行效果, 重新打包ing...(2000 Years later..)

### 小结

1. 为何要学webpack的开发服务器?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>因为webpack每次打包很久, 甚至只改几行代码, 也要从0打包</li>
   </ul> 
   </details>



## 17.webpack-开发服务器-学习

### 目标

下载webpack-dev-server, 启动一个开发服务器, 用于快速开发应用程序

### 讲解

[webpack-dev-server文档](https://webpack.docschina.org/configuration/dev-server/)

1. 构建入口和所有模块依赖关系图
2. 磁盘读取对应的文件到内存, 才能加载  
3. 用对应的 loader 进行处理和翻译  
4. 将处理完的内容, 输出到**内存里而非磁盘上**
5. 以后代码变化, **自动更新打包变化的代码**, 显示到浏览器上

#### 步骤

1. 下载包

   ```bash
   yarn add webpack-dev-server -D
   ```

2. 配置自定义命令serve

   ```js
   scripts: {
   	"build": "webpack",
   	"serve": "webpack serve"
   }
   ```

3. 运行命令-启动webpack开发服务器

   ```bash
   yarn serve
   #或者 npm run serve
   ```

4. 启动一个web服务器和端口, 在浏览器访问查看

> 效果: 以后改src下的代码, 自动打包更新到浏览器上

### 小结

1. 如何用webpack开发服务器, 实时打包我们的代码？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>下载webpack-dev-server包</li>
   <li>在package.json配置serve命令, 启动</li>
   <li>webpack-dev-server给我们一个地址+端口, 供浏览器访问查看index.html页面和打包后的js和css等</li>    
   </ul> 
   </details>

2. webpack开发服务器好处是?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>打包进内存里, 使用更快</li>
   <li>代码变化, 只会重新打包和更新, 变化的文件和代码</li>
   </ul> 
   </details>



## 18.webpack-开发服务器-配置

### 目标

查找文档, 修改开发服务器配置

### 讲解

[webpack-dev-server配置文档](https://webpack.docschina.org/configuration/dev-server/#devserverafter)

1. webpack.config.js中添加服务器配置

   ```js
   module.exports = {
       // ...其他配置
       devServer: {
         port: 3000, // 端口号
         open: true // 启动后自动打开浏览器
       }
   }
   ```

2. 重启开发服务器观察效果即可

### 小结

1. 如何修改webpack开发服务器的配置呢？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>去文档查找配置项的名字</li>
   <li>在webpack.config.js的devServer选项里添加</li> 
   </ul> 
   </details>



## 19.webpack-项目打包发布

### 目标

项目做完了, 要上线怎么办

### 讲解

1. 修改mode选项(==任选一个==)

   ```js
   module.exports = {
       // ...其他配置
       mode: 'development' // 开发环境-> 不会极致压缩, 一般开发服务器默认使用这个属性
   }
   ```

   ```js
   module.exports = {
       // ...其他配置
   	mode: 'production'  // 生产环境-> 会极致压缩, 一般上线npm run build会自动采用这个模式
   }
   ```

2. 执行之前的yarn build产生dist目录

   > 所有代码, 被整合打包

3. 把dist目录交给后台/运维, 部署给客户使用即可

   > 开发环境的代码不用发

### 小结

1. 项目分哪2个环境?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>线上和线下2个环境</li>
   <li>线上也叫"生产环境"/"部署", 英文"production"</li>
   </li>线下也叫"开发环境"/写代码, 英文"development"</li>
   </ul> 
   </details>



## 今日总结

> 最少要学会这些, 支撑后面

- [ ] 什么是webpack?

  静态模块资源打包工具, 打包我们编写的代码, 翻译, 整合, 分析, 压缩等功能

- [ ] yarn的作用?

  替代npm在nodejs环境的包管理器, 速度要比npm好

  ```js
  // 拿到新项目, 缺少node_modules, 执行命令下包, 根据package.json记录的哪些包下载
  yarn
  
  // 安装某个包
  yarn add 包名
  ```

- [ ] webpack构建的流程是什么?

  执行打包命令, 寻找配置文件, 找到入口, 建立依赖关系图, 用插件加载器翻译处理编写的文件, 打包输出到指定位置

- [ ] 说出webpack的作用, 加载器和插件的作用即可

  > webpack在node环境下使用
  >
  > 可以对任何模块, 翻译, 压缩, 打包
  >
  > 加载器给webpack带来识别功能类型文件的能力
  >
  > 插件是给webpack带来更多的功能

- [ ] 前端为何能用yarn下的包?

  >  因为webpack翻译后输出到js, 再插入到html中运行

- [ ] 以后开发时, 使用webpack还是webpack-dev-server? 为什么?

  使用webpack-dev-server启动的服务器, 只打包更新的代码, 还提供地址让浏览器访问打包后代码
  
  项目开发完成, 使用webpack打包生成dist部署给服务器, 让客户使用



## 面试题

### 1、什么是webpack（必会）

1. webpack是一个javascript的静态模块打包工具
2. webpack里一切文件皆模块，通过loader转换文件，通过plugin注入钩子
3. 最后输出由多个模块组合成的文件，webpack专注构建模块化项目

### 2、webpack的优点是什么？（必会）

1. 专注于处理模块化的项目，能做到开箱即用，一步到位
2. 通过plugin扩展，完整好用又不失灵活
3. 通过loaders扩展, 可以让webpack把所有类型的文件都解析打包
4. 区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展

### 3、webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全（必会）

​    webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件读取与合并参数，得出最终的参数
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，开始执行编译
3. 确定入口：根据配置中的 entry 找出所有的入口文件
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 webpack 提供的 API 改变 webpack 的运行结果

### 4、说一下 webpack 的热更新原理(必会)

​	webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

​    	HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS(webpack-dev-server) 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。

​    后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。

### 5、webpack与grunt、gulp的不同？（必会）

​    **1)** **三者之间的区别**

​       三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

​       grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

​       webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

​    **2)** **从构建思路来说**

​       gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工

​    **3)** **对于知识背景来说**

​       gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路

### 6、有哪些常见的Loader？他们是解决什么问题的？（必会）

1、  file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

2、  url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去

3、  source-map-loader：加载额外的 Source Map 文件，以方便断点调试

4、  image-loader：加载并且压缩图片文件

5、  babel-loader：把 ES6 转换成 ES5

6、  css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

7、  style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。

8、  eslint-loader：通过 ESLint 检查 JavaScript 代码

### 7、Loader和Plugin的不同？（必会）

**1)** **不同的作用**

​       loader直译为"加载器"。webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。 所以loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。

​    Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。

**2)** **不同的用法**

​    Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）

​    Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。

## 今日作业

今日作业, 最好在课上案例的基础上, 接着写, 因为课上案例中webpack已经配置好了很多插件

### 题目1-来吧css

可以调研, 在打包时, 如何把css提取成一个独立的文件

效果: 打包后的dist文件夹下, 多一个独立的css文件里有css代码

提示: 需要一个加载器 (具体使用请百度)

### 题目2-你好vue

可以调研, 如何把vue文件让webpack打包使用

首先准备一下, 在新建工程

效果: 让vue里代码, 最终显示在网页上(其实webpack打包后, 插入到index.html上执行)

提示: 百度vue-loader官网

==注意: vue-loader@15.9.8 才能对应使用vue2.x版本==

==注意: vue和vue-template-compiler都要指定相同版本, 建议@2.6.12版本即可==

1. 在src/新建App.vue文件, 复制以下代码

```vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
```

2. 在src/main.js - 入口处, 新增代码

```js
import App from './App.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({ 
  render: h => h(App) // 渲染函数, 渲染App组件里的标签
}).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里
```

3. 需要下载除了webpack和webpack-cli包以外, 还得下载vue

```bash
yarn add vue
```

4. 在public/index.html准备

```html
<body>
    <div id="app"></div>
</body>
```

5. 不要忘了自行配置生成html的插件, 让public/index.html作为模板

6. 可以启动热更新服务器 / 打包后运行index.html 观察App.vue写得话是否出现在页面上

> 总结(重要): webpack配置上vue-loader就可以解析vue类型文件, 为后面写vue项目做铺垫

## 扩展

> 这部分给基础超强的同学, 自行学习扩展

### webpack4-图片打包

如用的是**webpack4**版本, 尝试这里配置

> 当然webpack5是向下兼容的, 也可以使用

[url-loader文档](https://webpack.docschina.org/loaders/url-loader/)

[file-loader文档](https://webpack.docschina.org/loaders/file-loader/)

1. 下载依赖包

   ```bash
   yarn add url-loader file-loader -D
   ```

2. webpack.config.js 配置

   ```js
   {
     test: /\.(png|jpg|gif|jpeg)$/i,
     use: [
       {
         loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
         options: {  // 配置limit, 超过8k, 不转base64字符串, 自动用file-loader复制文件到dist下
           limit: 8 * 1024,
         }
       }
     ]
   }
   ```

### webpack4-字体图标

webpack.config.js配置

```js
{ // 处理字体图标的解析
    test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 2 * 1024,
                    // 配置输出的文件名
                    name: '[name].[ext]',
                    // 配置输出的文件目录
                    outputPath: "fonts/"
                }
            }
        ]
}
```

### source map的说明

> 目标: source map概念, 用于在浏览器调试错误使用, 记录代码打包前原始位置

1. 准备: src/main.js产生一个未定义变量的报错, 启动webpack服务器

```js
console.log(abc); // 不要声明abc变量
```

2. 问题: 看浏览器-控制台报错信息, 但是==发现看不出哪行代码报错了==

   原因: webpack对代码, 压缩, 混淆, 减小文件的体积(提高文件的加载效率)

   * 变量被替换成没有任何语义的名称
   * 空行和注释被剔除, 压缩到一行

![image-20201213134820689](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/014_source_map错误提示1.png)



> #### 解决方案: 启用source map

#### 开发环境

1. webpack.config.js - 配置

   ```js
   module.exports = {
     // ...其他配置
     mode: 'development', // 开发模式 - webpack内部不会使用内置优化, 不压缩代码(使用'production'上线生产模式, 会压缩代码)
     devtool: 'cheap-module-source-map', // cheap-module-source-map 开发模式下使用, 保证运行时的行数 和 源代码行数 一致  (默认不写是eval模式)
   }
   ```

2. 重新启动开发服务器/打包, 观察是否有错误代码打包前的位置信息了

#### 生产环境

1. 不显示源码, 但是可以看到哪行报错

   ```js
   devtool: 'nosources-source-map'
   ```

   ![image-20201213135929321](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/015_source_map错误提示2.png)

2. 显示源码

   ```js
   devtool: 'source-map'
   ```

   ![image-20201213140218039](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/016_暴露源码危险_处理方案.png)

#### devtool值说明

规则字符串列表:https://webpack.docschina.org/configuration/devtool/

格式: [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map  (了解即可)

| 规则值              | 速度                              | 位置         | 说明                                                  |
| ------------------- | --------------------------------- | ------------ | ----------------------------------------------------- |
| false               | **建立**：最快<br>**重建**：最快  | 无           | 不开启sourcemap(规则值写错也是这个)                   |
| inline              | **建立**：最慢<br/>**重建**：最慢 | 内嵌         | 报错信息, 以及源码和源码位置信息                      |
| hidden              | **建立**：最慢<br/>**重建**：最慢 | 独立map文件  | 报错信息, 没有源码和源码位置信息                      |
| eval                | **建立**：快<br/>**重建**：最快   | 内嵌         | 报错信息, 以及源码<br>(mode为development时使用这个值) |
| cheap               | **建立**：固定<br/>**重建**：慢   | 独立map文件  | 报错信息, 以及源码和源码的行数(没有列)                |
| module              | **建立**：慢<br/>**重建**：快速   | 与别的一起用 | 是否为loaders加载器生成source map                     |
| [xxx-...]source-map | **建立**：最慢<br/>**重建**：最慢 | 独立map文件  | 报错信息, 以及源码和源码位置信息                      |
| nosource            | **建立**：最慢<br/>**重建**：最慢 | 独立map文件  | 报错信息, 不显示源码                                  |

> 总结: 名字如何组合, 还要看上面文档, 不记录  快于  内嵌 快于  独立文件

#### devtool常用组合

![image-20210227130825907](https://gitee.com/lidongxuwork/typora-picture-storage/raw/master/Vue基础/Day00/017_devTool选项常用组合.png)

 