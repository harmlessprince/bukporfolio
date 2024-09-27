import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'},
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // linkActiveClass: 'border-indigo-500',
    // linkExactActiveClass: 'border-indigo-700',
    routes,
})

export default router;