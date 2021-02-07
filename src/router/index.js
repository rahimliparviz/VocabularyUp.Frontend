import Vue from 'vue'
import VueRouter from 'vue-router'


import adminRoutes from './admin-routes'
Vue.use(VueRouter)

const routes = adminRoutes


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


import store from '../store/index';

router.beforeEach( (to, _, next)=> {
  if (!!to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (!!to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
