import $ from 'jquery'

// jQuery 中 ajax 的请求拦截器函数
$.ajaxPrefilter((options) => {
  // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
  // options.url = 'http://ajax.frontend.itheima.net' + options.url
  options.url = 'http://127.0.0.1:8081' + options.url

  // 配置 ajax 请求头 当请求地址为非 /api 的时候添加请求头
  if (options.url.indexOf('/user') != -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }

  // 无论请求成功还是失败，最终调用 complete 回调函数
  options.complete = function (res) {
    if (res.responseJSON.status == 1 && res.responseJSON.message == '身份认证失败！') {
      localStorage.removeItem('token')
      location.hash = '#/login'
    }
  }
})