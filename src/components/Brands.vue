<script setup>

import Brand1 from "@/assets/brand1.svg";
import {useBrandStore} from "@/store/brand.store.js";
import {onBeforeMount, onMounted} from "vue";

const brandStore = useBrandStore()
onBeforeMount(() => {
  brandStore.getBrands();
});
</script>

<template>
  <section class="bg-[#dadada] w-full text-center pt-[1rem] pb-[2rem] overflow-x-auto">
    <header class="text-[#727272] text-[1.5rem] font-lg">Some Brands Touched</header>
    <div class="mt-[1rem] flex flex-row items-center justify-center overflow-x-auto overflow-hidden">
      <img :src="brand.image ?? Brand1" class="w-[17.1rem] h-[6.5rem] mr-[2rem] grayscale" :alt="brand.name"  v-for="(brand, index) in brandStore.brands" :key="index">
    </div>
  </section>
</template>

<style scoped>

</style>