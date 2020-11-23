import Home from '../views/Home.vue'
import Language from '../views/admin/Language.vue'
import PhraseWithTranslation from '../views/admin/PhraseWithTranslation.vue'

const  adminRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/languages',
        name: 'Language',
        component: Language
    },
    {
        path: '/phrase-translation',
        name: 'Phrases',
        component: PhraseWithTranslation
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

export default adminRoutes;