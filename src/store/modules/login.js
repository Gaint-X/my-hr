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
  actions: {}
}
