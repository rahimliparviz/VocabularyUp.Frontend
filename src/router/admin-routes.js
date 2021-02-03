import Home from '../views/Home.vue'
import Language from '../views/admin/Language.vue'
import AddPhraseWithTranslation from '../views/admin/AddPhraseWithTranslation.vue'
import ListPhraseWithTranslation from '../views/admin/Phrase/ListPhraseWithTranslation.vue'
import UserAuth from '../views/auth/UserAuth.vue'

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
        path: '/add-phrase-translation',
        name: 'Add phrase',
        component: AddPhraseWithTranslation
    },
    {
        path: '/phrases',
        name: 'Phrases',
        component: ListPhraseWithTranslation
    },
    // TODO - user routes e cekir asagidaki routu
    {
        path: '/auth',
        name: 'Auth',
        component: UserAuth
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