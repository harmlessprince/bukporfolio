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
  <section class="bg-[#dadada] w-full text-center pt-[1rem] pb-[2rem]">
    <header class="text-[#727272] text-[1.5rem] font-lg">Some Brands Touched</header>
    <div class="mt-[1rem] flex flex-row items-center justify-center">
      <img :src="brand.url ?? Brand1" class="w-[10.7rem] h-[4.1rem] mr-[2rem]" :alt="brand.name"  v-for="(brand, index) in brandStore.brands" :key="index">
    </div>
  </section>
</template>

<style scoped>

</style>