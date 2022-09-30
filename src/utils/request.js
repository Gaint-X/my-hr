import axios from 'axios'

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
  (res) => res.data,
  (err) => Promise.reject(err)
)

export default _axios
