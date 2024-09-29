import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from "@/pages/Home.vue";
import Speaker from "@/pages/About/Speaker.vue";
import Author from "@/pages/About/Author.vue";
import Trainer from "@/pages/About/Trainer.vue";
import Entrepreneur from "@/pages/About/Entrepreneur.vue";
import Products from "@/pages/Shop/Products.vue";
import Cart from "@/pages/Shop/Cart.vue";
import Item from "@/pages/Shop/Item.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about/speaker', component: Speaker, name: 'speaker'},
    {path: '/about/author', component: Author, name: 'author'},
    {path: '/about/trainer', component: Trainer, name: 'trainer'},
    {path: '/about/coach#coach', component: Trainer, name: 'coach'},
    {path: '/about/entrepreneur', component: Entrepreneur, name: 'entrepreneur'},
    {path: '/shop/products', component: Products, name: 'products'},
    {path: '/shop/item', component: Item, name: 'item'},
    {path: '/shop/cart', component: Cart, name: 'cart'},
    
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