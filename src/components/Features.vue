<script setup>

import {useFeaturesStore} from "@/store/features.store.js";
import {onBeforeMount, onMounted, ref} from "vue";
import Brand1 from "@/assets/brand1.svg";
import Brand2 from "@/assets/brand2.svg";
import Container from "@/components/Container.vue";

const store = useFeaturesStore()
onBeforeMount(() => {
  store.getFeatures();
});

</script>

<template>
  <Container>
    <section class="flex items-center py-top bg-white overflow-hidden">
      <div class="font-header text-xlg text-[#0F0F13] mr-[2rem] no-wrap w-[9rem]">Featured on:</div>
      <div class="flex flex-row justify-between items-center w-full">
        <img :src="item.image ?? Brand1" class="w-[17.1rem] h-[6.5rem] mr-[2rem] grayscale" :alt="item.name"  v-for="(item, index) in store.features" :key="index"/>
      </div>
    </section>
  </Container>
</template>

<style scoped>

</style>