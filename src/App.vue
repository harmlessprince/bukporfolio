<script setup>
import { RouterView } from "vue-router";
import {useCartStore} from "@/store/cart.store.js";
import { onMounted } from 'vue';
const cartStore = useCartStore();
onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
