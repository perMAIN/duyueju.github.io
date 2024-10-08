import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/login.vue')
    },
    {
        path: '/zq',
        name: 'zq',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/zq.vue')
    },
    {
        path: '/zy',
        name: 'zy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/zy.vue')
    },
    {
        path: '/zdy',
        name: 'zdy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/zdy.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach(to, from, next){
//   next()
// }

export default router