import {createApp} from 'vue'
import PrimeVue from "primevue/config";
import './style.css'
import VueVirtualScroller from 'vue-virtual-scroller'
import App from './App.vue'

import router from "@/router";
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(PrimeVue, {
    unstyled: false
});
app.use(VueVirtualScroller)

app.mount('#app')