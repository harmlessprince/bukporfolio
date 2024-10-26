<script setup>
import { RouterView } from "vue-router";
import {useCartStore} from "@/store/cart.store.js";
import { onMounted } from 'vue';
import Loader from "@/components/Loader.vue";
import {useLoaderStore} from "@/store/loader.store.js";
import {useToggleSidebar} from "@/store/toggleSideBar.store.js";
import Footer from "@/components/footer.vue";
import Navigation from "@/components/Navigation.vue";
import Sidebar from "@/components/Sidebar.vue";
const loaderStore = useLoaderStore()
const cartStore = useCartStore();
const toggleSidebar = useToggleSidebar()
onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="page-container">
    <Navigation/>
    <Sidebar />
    <main class="text-primary mb-[5rem]">
      <loader v-show="loaderStore.loading"></loader>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#page-container {
  position: relative;
  min-height: 100vh;
}
</style>
