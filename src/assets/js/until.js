import store from "@/store";
import router from "@/router";
import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://www.mysite01.site:3000',
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
})

// request 请求拦截 use(两个参数)
instance.interceptors.request.use(
  req => {
    if (store.state.token) {
      req.headers.common['authorization'] = store.state.token
    }
    return req
  },
  err => {
    console.log(err)
  }
)
// response 响应拦截 use(两个参数)
instance.interceptors.response.use(
  res => {
    if (res.status == 200) {
      const data = res.data
      if (data.status == 403) {
        // 登录过期需要重新登录, 清空 vuex 中的 token 以及localstroge的 token
        store.commit('setToken', '')
        localStorage.removeItem('token')
        // 强制跳转 login 界面
        router.replace({ path: '/' })
      }
      return data
    }
    return res
  }
)

export function get(url,Params) {
  return new Promise((resolve,reject) => {
    instance.get(url,{
      params: Params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post(url,data) {
  return new Promise((resolve,reject) => {
    instance.post(url,data)
    .then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function put(url,data) {
  return new Promise((resolve,reject) => {
    instance.put(url,data)
    .then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}