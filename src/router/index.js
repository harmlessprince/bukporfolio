import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from "@/pages/Home.vue";
import Speaker from "@/pages/About/Speaker.vue";
import Interview from "@/pages/About/interviews.vue";
import Author from "@/pages/About/Author.vue";
import Trainer from "@/pages/About/Trainer.vue";
import Entrepreneur from "@/pages/About/Entrepreneur.vue";
import Products from "@/pages/Shop/Products.vue";
import Cart from "@/pages/Shop/Cart.vue";
import Item from "@/pages/Shop/ProductItem.vue";
import Blog from "@/pages/Blog/Index.vue";
import Post from "@/pages/Blog/Post.vue";
import Contact from "@/pages/Contact.vue";
import NotFound from "@/pages/NotFound.vue";
import Gallery from "@/pages/Gallery.vue";


const routes = [
    {path: '/', component: Home, name: 'home', meta: {title: 'Bright UK Portfolio -  Home'}},
    {path: '/about/speaker', component: Speaker, name: 'speaker', meta: {title: 'Bright-UK-Speaker'}},
    {path: '/about/interviews', component: Interview, name: 'interview', meta: {title: 'Bright-UK-Interview'}},
    {path: '/about/author', component: Author, name: 'author', meta: {title: 'Bright-UK-Author'}},
    {path: '/about/trainer', component: Trainer, name: 'trainer', meta: {title: 'Bright-UK-Author'}},
    {path: '/about/coach', component: Trainer, name: 'coach', meta: {title: 'Bright-UK-Coach'}},
    {path: '/about/entrepreneur', component: Entrepreneur, name: 'entrepreneur', meta: {title: 'Bright-UK-Entrepreneur'}},
    {path: '/shop/books', component: Products, name: 'books', meta: {title: 'Bright-UK-Books'}},
    {path: '/shop/books/:id', component: Item, name: 'book', meta: {title: 'Bright-UK-Books-Details'}},
    {path: '/shop/cart', component: Cart, name: 'cart', meta: {title: 'Bright-UK-Cart'}},
    {path: '/blog', component: Blog, name: 'blog', meta: {title: 'Bright-UK-Blog'}},
    {path: '/blog/post/:id', component: Post, name: 'post', meta: {title: 'Bright-UK-Blog'}},
    {path: '/contact', component: Contact, name: 'contact', meta: {title: 'Bright-UK-Contact'}},
    {path: '/gallery', component: Gallery, name: 'gallery', meta: {title: 'Bright-UK-Gallery'}},
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
        props: (route) => ({ message: route.query?.message, reason: route.query?.reason, route: route.query?.route, buttonText: route.query?.buttonText }),
        meta: {title: 'Bright-UK-Not-Found'}
    },
]
let previousRoute = null;
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // linkActiveClass: 'text-primaryColor border-b-4 border-primaryColor',
    // linkExactActiveClass: 'text-primary border-b-4 border-primary',
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
    },
})

router.beforeEach((toRoute, from, next) => {
    window.document.title = toRoute.meta && toRoute?.meta.title ? toRoute.meta.title : 'Bright UK Portfolio';
    previousRoute = from.name || 'Home';
    next();
})
export function getPreviousRoute() {
    return previousRoute;
}

export default router;