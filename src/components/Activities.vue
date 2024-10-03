<script setup>

import Subheading from "@/components/SubHeading.vue";

import {useVideoStore} from "@/store/videos.store.js";
import {ref,} from "vue";
import HomeVideoActivity from "@/components/HomeVideoAcitivity.vue";
import Home from "@/pages/Home.vue";


const currentVideo = ref(null);
const currentIndex = ref(0);
const currentDirection = ref('forward');
const store = useVideoStore()

const playVideo = (video) => {
  currentVideo.value = video;
};

</script>

<template>
  <div class="w-full flex max-sm:flex-col justify-center gap-[3rem] mt-[2rem] py-[5rem]">
    <div class="max-w-[37.5rem] grow flex flex-col gap-[0.8rem]">
      <!-- <VueperSlides>
        <VueperSlides
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image" />
      </VueperSlides> -->
      <!-- <div
        class="thumbnail w-full h-[36.4rem]"
        v-for="(video, index) in store.videos"
        :key="index"
        @click="playVideo(video)"
      >
        <img
          :src="video.thumbnail"
          :alt="video.name"
          class="w-full h-full object-cover object-center"
        />
      </div> -->
    </div>
    <!-- video -->
    <div class="text-center w-[35rem] grow">
      <Subheading title="Videos"/>
      <header class="text-xlg font-header text-[#f9f7ea] mb-10">
        Hear directly from Bright UK
      </header>
      <div class="w-full h-[56.7rem]">
        <HomeVideoActivity />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
