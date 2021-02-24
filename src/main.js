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
// console.log(this.agent);

Vue.component('base-card', () => import('./components/ui/BaseCard.vue'))
Vue.component('base-button', () => import('./components/ui/BaseButton.vue'))
Vue.component('base-badge', () => import('./components/ui/BaseBadge.vue'))
Vue.component('base-spinner', () => import('./components/ui/BaseSpinner.vue'))
Vue.component('base-dialog', () => import('./components/ui/BaseDialog.vue'))
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')


