import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
        },
        {
            path: '/about',
            name: 'About',
        },
        {
            path: '/dashload',
            name: 'Dashload',
        },
    ]
})