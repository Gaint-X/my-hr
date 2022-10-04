import { sysLogin } from '@/api/login.js'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    SETTOKEN(state, value) {
      state.token = value
    }
  },
  actions: {
    async toLogin(ctx, value) {
      const res = await sysLogin(value)
      ctx.commit('SETTOKEN', res.data)
    }
  }
}
