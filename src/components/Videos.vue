<script setup>

import Bright1 from "@/assets/bright1.png";
import Subheading from "@/components/SubHeading.vue";
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'
import {useVideoStore} from "@/store/videos.store.js";
import {onBeforeMount, onMounted, ref, watch} from "vue";

// const slides = [{
//     image: '@/assets/bright1.png'
//   },
//   {
//     image: '@/assets/bright1.png'
//   },
//   {
//     image: '@/assets/bright1.png'
//   },]

const currentVideo = ref(null);
const currentIndex = ref(0);
const currentDirection = ref('forward');
const store = useVideoStore()
watch(
    () => store.videos,
    (newVideos) => {
      if (newVideos.length > 0) {
        currentVideo.value = newVideos[currentIndex.value];
      }
    }
);

onBeforeMount(() => {
  store.getVideos();
});

const playVideo = (video) => {
  currentVideo.value = video;
};

const isYouTube = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};
const getYouTubeEmbedUrl = (url) => {
  const videoId = url.includes('youtube.com')
      ? new URL(url).searchParams.get('v')
      : url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
};


function onVideoChange(index) {
  currentIndex.value = index;
  currentVideo.value = store.videos[currentIndex.value];
}

function nextVideo() {
  if (currentIndex.value < store.videos.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Loop back to the first item
  }
  currentVideo.value = store.videos[currentIndex.value];
  currentDirection.value = 'forward';
}

function previousVideo() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = store.videos.length - 1; // Loop to the last item
  }
  currentVideo.value = store.videos[currentIndex.value];
  currentDirection.value = 'backward';
}
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
      <Subheading title="Videos" />
      <header class="text-xlg font-header text-[#f9f7ea] mb-10">
        Hear directly from Bright UK
      </header>
      <div class="w-full h-[56.7rem]">
        <div v-if="currentVideo">
          <template v-if="isYouTube(currentVideo.url)">
            <iframe
              class="w-full"
              height="544"
              :src="getYouTubeEmbedUrl(currentVideo.url)"
              allowfullscreen
            ></iframe>
          </template>
          <template v-else>
            <source :src="currentVideo" type="video/mp4" />
            Your browser does not support the video tag.
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
