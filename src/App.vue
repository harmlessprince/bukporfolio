<script setup>
import { RouterView } from "vue-router";
import {useCartStore} from "@/store/cart.store.js";
import { onMounted } from 'vue';
import Loader from "@/components/Loader.vue";
import {useLoaderStore} from "@/store/loader.store.js";
const loaderStore = useLoaderStore()
const cartStore = useCartStore();
onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="">
    <main>
      <loader v-show="loaderStore.loading"></loader>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
