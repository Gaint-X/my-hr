import request from '@/utils/request'
// login
const sysLogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
export { sysLogin }
