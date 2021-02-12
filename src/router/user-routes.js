
const userRoutes = [
    {
        path: '/profile',
        name: 'Profile',
        meta: { requiresAuth: true },
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/practice/:type?',
        name: 'Practice',
        meta: { requiresAuth: true, defaultParams: { type: "tftru"} },
        component: () => import('../views/Practice.vue')
    }
]


export default userRoutes;