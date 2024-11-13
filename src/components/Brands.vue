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
        class="w-full text-center pt-[1.4rem] "
      >
        <div
          class="flex flex-row"
        >
          <Carousel v-bind="settings"  :autoplay="500"  snapAlign="start" :itemsToShow="5" :wrapAround="true">
            <Slide v-for="(slide, index) in brandStore.brands" :key="index" class="flex flex-row">
              <div class="">
                <img
                    :src="slide.image"
                    class="h-full w-full"
                    :alt="slide.name"
                    :key="index"
                />
              </div>
            </Slide>

            <template #addons="">
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
section > div > div > div > section > div.carousel__viewport > ol > li {
  width: 20% !important;
}
</style>
