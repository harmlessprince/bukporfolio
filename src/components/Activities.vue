<script setup>

import Subheading from "@/components/SubHeading.vue";

import {useVideoStore} from "@/store/videos.store.js";
import {ref,} from "vue";
import HomeVideoActivity from "@/components/HomeVideoAcitivity.vue";
import Home from "@/pages/Home.vue";
import PrimeVueCarousel from 'PrimeVueCarousel';
import PrimeVueButton from 'PrimeVueButton';

const currentVideo = ref(null);
const currentIndex = ref(0);
const currentDirection = ref('forward');
const store = useVideoStore()
const images = ref([
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
]);
const playVideo = (video) => {
  currentVideo.value = video;
};

</script>

<template>
  <div class="w-full flex max-medium:flex-col justify-center gap-[3rem] py-[2rem]  max-medium:h-full">
    <div class="max-w-[37.5rem] max-medium:max-w-full grow flex flex-col gap-[0.8rem]">
      <Subheading title="Images"/>
      <header class="text-xlg font-header text-[#f9f7ea] mb-4">
        Bright UK Memories
      </header>
      <PrimeVueCarousel :value="images" :numVisible="2" :numScroll="1" orientation="vertical"
                        verticalViewPortHeight="600px" containerClass="flex items-center">
        <template #item="slotProps">
          <div>
            <div class="mb-[1rem]">
              <div class="relative mx-auto h-[300px]">
                <img :src="slotProps.data" :alt="slotProps.data" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </template>
      </PrimeVueCarousel>
    </div>
    <!-- video -->
    <div class="text-center w-[35rem] max-medium:w-full grow">
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
