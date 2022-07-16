// 统一封装接口方法
// 每个方法负责请求一个url地址
// 逻辑页面,导入这个接口方法, 就能统一发请求了
// 好处: 请求url路径, 可以在这里统一管理
import axios from '@/utils/request'

// 获取 - 获取所有频道
export const getAllChannelsAPI = () => axios({
  url: 'v1_0/channels',
  method: 'GET'
})
