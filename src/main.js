import Vue from 'vue'
import App from './App.vue'
import 'axios/index.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
