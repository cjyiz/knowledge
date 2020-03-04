import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.scss'
import './plugins/element.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
