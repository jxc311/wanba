import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/App'
    },
    //重定向
    {
        path: '/App',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/classify',
        component: () =>
            import ('../views/Classify.vue'),
    },
    {
        path: '/shopping',
        component: () =>
            import ('../views/Shopping.vue')
    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine.vue')
    },
    {
        path: '/discover',
        component: () =>
            import ('../views/Discover.vue')
    },
    {
        path: '/friend',
        component: () =>
            import ('../components/classify/Friend.vue')
    },
    {
        path: '/encounter',
        component: () =>
            import ('../components/classify/Encounter.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router