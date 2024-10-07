<script setup>
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import {useFeaturesStore} from "@/store/features.store.js";
import {onBeforeMount, onMounted, ref} from "vue";
import Brand1 from "@/assets/brand1.svg";
import Brand2 from "@/assets/brand2.svg";
import Container from "@/components/Container.vue";

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
});
const settings = ref({
  itemsToShow: 5,
  snapAlign: 'center',
})
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
        <Carousel v-bind="settings"  :autoplay="500" :itemsToShow="5" :wrapAround="true">
          <Slide v-for="(slide, index) in store.features" :key="index" >
            <img
                :src="slide.image ?? Brand1"
                class="w-[17.1rem] max-sm:w-[16rem] h-[6.5rem] mr-[2rem] max-small:mr-0 grayscale"
                :alt="slide.name"
                :key="index"
            />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </section>
  </Container>
</template>

<style scoped></style>
