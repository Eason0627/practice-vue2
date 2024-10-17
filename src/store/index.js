import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 变量存储库
  state: {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    nickname: localStorage.getItem('nickname') || '',
    userImg: localStorage.getItem('userImg') || '',
    level: localStorage.getItem('level') || '',
  },
  // 包装器
  getters: {},
  // 处理变量的方法块 同步的方式
  mutations: {
    setToken(state,token) {
      state.token = token
    },
    setUsername(state,username) {
      state.username = username
    },
    setNickName(state,nickname) {
      state.nickname = nickname
    },
    setUserImg(state,userImg) {
      state.userImg = userImg
    },
    setUserLevel(state,level) {
      state.level = level
    }
  },
  // 异步处理变量的方法块，需调用 mutations 中的函数
  actions: {

  },
  modules: {}
})