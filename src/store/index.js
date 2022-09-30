import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import login from './modules/login'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    login
  },
  getters,
  plugins: [
    persistedstate({
      // 模块名.属性名：只持久化该属性
      // 模块名：整个模块的所有数据都持久化
      // 不配制该参数paths,默认是所有vuex数据都持久化
      paths: ['login.token']
    })
  ]
})

export default store
