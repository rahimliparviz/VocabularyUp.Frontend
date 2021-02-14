import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import commonRoutes from './common-routes'
import adminRoutes from './admin-routes'
import userRoutes from './user-routes'
Vue.use(VueRouter)




const routes = [...adminRoutes,...userRoutes, ...commonRoutes];

// console.log(role,routes)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




//TODO add role based authentication
router.beforeEach((to, _, next) => {
  if (!!to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (!!to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    // console.log(store.getters.role)
    next();
  }
});

export default router
