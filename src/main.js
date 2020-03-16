import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import API from './api'
import router from './router'
import store from './store'
import './assets/main.scss'
import './plugins/element.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = API
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  axios,
  API,
  render: h => h(App)
}).$mount('#app')
