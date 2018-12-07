import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'homeMain',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/HomeMain.vue')
        },
        {
            path: '/musictrunk',
            name: 'musictrunk',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/HomeMusictrunk.vue')
        },
        {
            path: '/uebermich',
            name: 'ueberMich',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/UeberMich.vue')
        },
        {
            path: '/referenzen',
            name: 'referenzen',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Referenzen.vue')
        },
        {
            path: '/pakete',
            name: 'pakete',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Pakete.vue')
        },
        {
            path: '/anreise',
            name: 'anreise',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Anreise.vue')
        },
        {
            path: '/terminkalender',
            name: 'terminkalender',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Terminkalender.vue')
        },
        {
            path: '/impressum',
            name: 'impressum',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Impressum.vue')
        },
        {
            path: '/datenschutz',
            name: 'datenschutz',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Datenschutz.vue')
        }
    ]
})
