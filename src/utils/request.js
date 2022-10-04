import axios from 'axios'
import { Message } from 'element-ui'

const _axios = axios.create({
  baseURL: process.env.VUE_APP_URL
})
// 请求拦截
_axios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
)
// 响应拦截
_axios.interceptors.response.use(
  (res) => {
    if (res.data.success) {
      return res.data
    }
    // 提示一下
    Message.error(res.data.message)
    return Promise.reject(res.data.message)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default _axios
