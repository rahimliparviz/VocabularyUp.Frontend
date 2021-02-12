import Home from '../views/Home.vue'
import Language from '../views/admin/Language.vue'
import AddPhraseWithTranslation from '../views/admin/AddPhraseWithTranslation.vue'
import ListPhraseWithTranslation from '../views/admin/Phrase/ListPhraseWithTranslation.vue'

const  adminRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/languages',
        name: 'Language',
        component: Language,
        meta: { requiresAuth: true }
    },
    {
        path: '/add-phrase-translation',
        name: 'Add phrase',
        component: AddPhraseWithTranslation,
        meta: { requiresAuth: true }
    },
    {
        path: '/phrases',
        name: 'Phrases',
        component: ListPhraseWithTranslation,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]


// router.beforeEach(function (to, _, next) {
//     if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//         next('/auth');
//     } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//         next('/');
//     } else {
//         next();
//     }
// });



export default adminRoutes;