import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "@/router";
import qs from 'qs'
import * as echarts from 'echarts'


// 导入样式
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.js'
import '@/assets/js/iconfont.js'
import '@/index.css'
// jQuery ajax拦截器
// import '@/assets/js/jQ_ajax_handler'
// axios ajax拦截器
import {get,post,put} from './assets/js/until'

Vue.prototype.$http = {
  get,
  post,
  put
}
// Axios.defaults.baseURL = 'http://127.0.0.1:3000'
// Axios.defaults.timeout = 5000
// Vue.prototype.$http = Axios
Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts
Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')