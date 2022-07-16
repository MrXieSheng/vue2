// 目标1: 引入打包观察效果
import {addFn} from './add/add.js'
import {getArraySum} from './tool/tool.js'
console.log(addFn(10, 20));
console.log(getArraySum([5, 4, 3, 2, 1]));

// 目标2: yarn下的包, 在js引入, 不能直接用到前端
import $ from 'jquery'
$("#myUL>li:nth-child(2n+1)").css('color', 'yellow')
$("#myUL>li:nth-child(2n)").css('color', 'green')

// 目标3: 引入css代码
// webpack默认只识别js文件
// css引入后, 被打包, 等浏览器运行时, css样式生效
import './css/index.css'

// 目标4: 引入less文件
import './less/index.less'

// 目标5: webpack打包图片
// 小图 -> css背景(图片用的路径字符串)
// 大图 -> js中, import导入方式
import imgObj from './assets/images/big.gif'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)

// 目标6: 字体图标
import "./assets/fonts/iconfont.css"
let theI = document.createElement('i')
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)

// 目标7: 观察webpack降级js代码
let fn = () => {console.log(123)}
console.log(fn);