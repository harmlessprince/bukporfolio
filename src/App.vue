<script setup>
import { RouterView } from "vue-router";
import {useCartStore} from "@/store/cart.store.js";
import { onMounted } from 'vue';
import Loader from "@/components/Loader.vue";
import {useLoaderStore} from "@/store/loader.store.js";
import Footer from "@/components/footer.vue";
import Navigation from "@/components/Navigation.vue";
const loaderStore = useLoaderStore()
const cartStore = useCartStore();
onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="">
    <Navigation/>
    <main class="text-primary mb-[25rem] max-sm:mb-[50rem]">
      <loader v-show="loaderStore.loading"></loader>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
