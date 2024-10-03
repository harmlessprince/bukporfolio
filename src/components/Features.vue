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
    <section class="flex max-sm:flex-col items-center py-top max-sm:py-0 bg-white overflow-hidden">
      <div
        class="font-header text-xlg text-[#0F0F13] mr-[2rem] whitespace-nowrap max-sm:text-left max-sm:w-full max-sm:pl-[1rem]"
      >
        Featured on:
      </div>
      <div class="flex flex-row max-sm:flex-wrap max-sm:space-y-5 justify-between items-center w-full">
        <img
          :src="item.image ?? Brand1"
          class="w-[17.1rem] max-sm:w-[16rem] h-[6.5rem] mr-[2rem] max-small:mr-0 grayscale"
          :alt="item.name"
          v-for="(item, index) in store.features"
          :key="index"
        />
      </div>
    </section>
  </Container>
</template>

<style scoped></style>
