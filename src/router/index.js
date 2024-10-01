import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from "@/pages/Home.vue";
import Speaker from "@/pages/About/Speaker.vue";
import Author from "@/pages/About/Author.vue";
import Trainer from "@/pages/About/Trainer.vue";
import Entrepreneur from "@/pages/About/Entrepreneur.vue";
import Products from "@/pages/Shop/Products.vue";
import Cart from "@/pages/Shop/Cart.vue";
import Item from "@/pages/Shop/Item.vue";
import Blog from "@/pages/Blog/Index.vue";
import Post from "@/pages/Blog/Post.vue";
import Contact from "@/pages/Contact.vue";
import Videos from "@/pages/Gallery/Videos.vue";
import Pictures from "@/pages/Gallery/Pictures.vue";
import NotFound from "@/pages/NotFound.vue";
import Gallery from "@/pages/Gallery.vue";

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about/speaker', component: Speaker, name: 'speaker'},
    {path: '/about/author', component: Author, name: 'author'},
    {path: '/about/trainer', component: Trainer, name: 'trainer'},
    {path: '/about/coach', component: Trainer, name: 'coach'},
    {path: '/about/entrepreneur', component: Entrepreneur, name: 'entrepreneur'},
    {path: '/shop/products', component: Products, name: 'products'},
    {path: '/shop/item/:id', component: Item, name: 'item'},
    {path: '/shop/cart', component: Cart, name: 'cart'},
    {path: '/blog', component: Blog, name: 'blog'},
    {path: '/blog/post/:id', component: Post, name: 'post'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '/gallery', component: Gallery, name: 'gallery'},
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
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve) => {
                // Use a timeout or check if the element exists before scrolling
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        resolve({ el: to.hash });
                    } else {
                        resolve({ top: 0 });
                    }
                }, 300); // Delay to ensure DOM is rendered
            });
        }
        // If savedPosition exists (i.e., navigating with the browser back button), restore the scroll position
        if (savedPosition) {
            return savedPosition;
        }
        // Scroll to the top of the page
        return { top: 0, behavior: 'smooth' };
    }
})

export default router;