# Day00\_核心问题

## 01.webpack-概念

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

1. 代码增加后如何打包?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>要和src/index.js有直接或间接的引入关系</li>
   <li>重新执行yarn build</li>
   </ul> 
   </details>



## 05.webpack-配置修改

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

1. 前端项目如何使用yarn下的包?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>借助webpack, 把模块和代码打包</li>
   <li>把打包后js文件, 引入到html执行查看效果</li>
   </ul> 
   </details>





## 08.webpack-插件-自动生成html文件

1. 自动生成html和引入打包后文件, 如何做?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>下载html-webpack-plugin插件包, 给webpack.config.js配置上</li>
   </ul> 
   </details>





## 09.webpack-加载器-处理css文件问题

1. 为何webpack打包css文件会报错呢?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>不能, 因为webpack默认只识别js文件</li>
   </ul> 
   </details>





## 10.webpack-加载器-处理css文件

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

1. webpack如何支持图片打包？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>webpack5内置了, 只需要配置type:'asset'</li>  
   </ul> 
   </details>





## 13.webpack-加载器-图片处理区别

1. 对图片有哪两种处理方案？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>默认8kb以下图片, 转成base64字符串打包进js中, 减少网络请求次数</li>
   <li>超过8kb的图片, 直接复制到dist下, 转base64会增加30%体积</li>  
   </ul> 
   </details>



## 14.webpack-加载器-处理字体文件

1. webpack如何处理字体文件?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>在webpack.config.js的rules里针对字体图标文件类型设置asset/resource，直接输出到dist下</li>
   </ul> 
   </details>



## 15.webpack-加载器-处理高版本js语法

1. webpack如何帮助我们降低js版本语法？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>借助babel-loader和babel编译器，给webpack配置上, 翻译再打包使用</li>
   </ul> 
   </details>





## 16.webpack-开发服务器-为何学

1. 为何要学webpack的开发服务器?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>因为webpack每次打包很久, 甚至只改几行代码, 也要从0打包</li>
   </ul> 
   </details>



## 17.webpack-开发服务器-学习

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

1. 如何修改webpack开发服务器的配置呢？

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>去文档查找配置项的名字</li>
   <li>在webpack.config.js的devServer选项里添加</li> 
   </ul> 
   </details>



## 19.webpack-项目打包发布

1. 项目分哪2个环境?

   <details>     
   <summary>答案</summary> 
   <ul>
   <li>线上和线下2个环境</li>
   <li>线上也叫"生产环境"/"部署", 英文"production"</li>
   </li>线下也叫"开发环境"/写代码, 英文"development"</li>
   </ul> 
   </details>

