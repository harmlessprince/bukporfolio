<script setup>
import {useBrandStore} from "@/store/brand.store.js";
import {onBeforeMount, onMounted, ref} from "vue";
import Container from "@/components/Container.vue";
import {Carousel, Navigation, Slide} from "vue3-carousel";

const brandStore = useBrandStore()
onBeforeMount(() => {
  brandStore.getBrands();
});
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
          <Carousel v-bind="settings"  :autoplay="500" :itemsToShow="5" :wrapAround="true">
            <Slide v-for="(slide, index) in brandStore.brands" :key="index" >
              <img
                  :src="slide.image"
                  class="w-[17.1rem] max-sm:w-[16rem] h-[10rem] mr-[2rem] max-small:mr-0"
                  :alt="slide.name"
                  :key="index"
              />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped></style>
