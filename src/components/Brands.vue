<script setup>

import Brand1 from "@/assets/brand1.svg";
import {useBrandStore} from "@/store/brand.store.js";
import {onBeforeMount, onMounted} from "vue";
import Container from "@/components/Container.vue";

const brandStore = useBrandStore()
onBeforeMount(() => {
  brandStore.getBrands();
});
</script>

<template>
  <section class="bg-[#dadada]">
    <Container>
      <div
        class="w-full text-center pt-[1.4rem] pb-[5rem] overflow-x-scroll no-scrollbar"
      >
        <h3 class="text-[#727272] text-[2.4rem] font-lg mb-[2.5rem]">
          Some Brands Touched
        </h3>
        <div
          class="flex flex-row items-center gap-[4.6rem] justify-start overflow-x-scroll no-scrollbar"
        >
          <div
            class="w-[17.1rem] h-[6.5rem]"
            v-for="(brand, index) in brandStore.brands"
            :key="index"
          >
            <img
              :src="brand.image ?? Brand1"
              class="w-full h-full grayscale object-cover object-center"
              :alt="brand.name"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped></style>
