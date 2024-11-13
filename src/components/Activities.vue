<script setup>
import Subheading from "@/components/SubHeading.vue";
import {onBeforeMount, ref,} from "vue";
import HomeVideoActivity from "@/components/HomeVideoAcitivity.vue";
import PrimeVueCarousel from 'PrimeVueCarousel';
import {usePictureStore} from "@/store/pictures.store.js";

const pictureStore = usePictureStore()

onBeforeMount(() => {
  pictureStore.getPictures();
});
</script>

<template>

  <div class="w-full flex max-medium:flex-col justify-center  max-medium:h-full">
    <div class="max-w-[37.5rem] max-medium:max-w-full grow flex flex-col">
      <PrimeVueCarousel :value="pictureStore.pictures" :numVisible="2" :numScroll="1" orientation="vertical"
                        verticalViewPortHeight="682px" containerClass="flex items-center" :showNavigators="false"
                        :showIndicators="false" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div>
            <div class="mb-[1rem]">
              <div class="relative mx-auto h-[330px]">
                <img :src="slotProps.data" :alt="slotProps.data" class="w-full h-full object-cover object-top"/>
              </div>
            </div>
          </div>
        </template>
      </PrimeVueCarousel>
    </div>
    <!-- video -->
    <div class="text-center w-[35rem] max-medium:w-full grow py-[2rem] ">
      <Subheading title="Videos"/>
      <header class="text-xlg font-header text-[#f9f7ea] mb-10">
        Hear directly from Bright UK
      </header>
      <div class="w-full h-[56.7rem]">
        <HomeVideoActivity/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
