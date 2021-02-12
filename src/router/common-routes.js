import UserAuth from '../views/auth/UserAuth.vue'

const  commonRoutes = [
    {
        path: '/auth',
        name: 'Auth',
        component: UserAuth,
        meta: { requiresUnauth: true } 
    },
  
]


export default commonRoutes;