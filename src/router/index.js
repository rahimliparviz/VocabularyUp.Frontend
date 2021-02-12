import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import commonRoutes from './common-routes'
import adminRoutes from './admin-routes'
import userRoutes from './user-routes'
Vue.use(VueRouter)

const role = async () => { await store.getters.role; }


let roleBasedRoutes = role() == "admin" ? adminRoutes : userRoutes;
const routes = [...roleBasedRoutes, ...commonRoutes];

// console.log(role,routes)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





router.beforeEach((to, _, next) => {
  if (!!to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (!!to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router
