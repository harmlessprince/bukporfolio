<script setup>
import {useBrandStore} from "@/store/brand.store.js";
import {onBeforeMount, onMounted, ref} from "vue";
import Container from "@/components/Container.vue";
import {Carousel, Navigation, Slide} from "vue3-carousel";

const brandStore = useBrandStore()
onBeforeMount(() => {
  brandStore.getBrands();
});
const settings = {
  wrapAround: true,
  breakpoints :{
    // 700px and up
    300: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    700: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  }
}
</script>

<template>
  <section class="bg-[#fff]">
    <Container>
      <div
        class="w-full text-center pt-[1.4rem] overflow-x-scroll no-scrollbar"
      >
        <div
          class="flex flex-row items-center gap-[4.6rem] justify-start overflow-x-scroll no-scrollbar"
        >
          <Carousel v-bind="settings"  :autoplay="500" :itemsToShow="5" :wrapAround="true">
            <Slide v-for="(slide, index) in brandStore.brands" :key="index">
              <img
                  :src="slide.image"
                  class="w-[15.7rem] h-[6.7rem]"
                  :alt="slide.name"
                  :key="index"
              />
            </Slide>

            <template #addons>
<!--              <Navigation />-->
            </template>
          </Carousel>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.carousel__slide{
  margin-right: 20px;
}
</style>
