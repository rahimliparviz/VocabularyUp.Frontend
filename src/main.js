import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import agent from './api/agent'
import swal from "sweetalert2"



import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false
Vue.prototype.$agent = agent
Vue.prototype.$swal = swal


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

