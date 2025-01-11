<script setup>
import {useVideoStore} from "@/store/videos.store.js";
import {Carousel, Slide} from "vue3-carousel";
import {onBeforeMount, ref} from "vue";
import {VideoPlayer} from "@videojs-player/vue";
const store = useVideoStore()
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})
const currentSlide = ref(0)
const myCarousel = ref(null)
onBeforeMount(() => {
  store.getVideos();
});

function nextSlide() {
  // Check if the current slide is the last slide
  if (currentSlide.value === store.videos.length - 1) {
    // If it is, go back to the first slide
    currentSlide.value = 0;
  } else {
    // Otherwise, go to the next slide
    currentSlide.value += 1;
  }
}

function prevSlide() {
  // Check if the current slide is the first slide
  if (currentSlide.value === 0) {
    // If it is, go to the last slide
    currentSlide.value = store.videos.length - 1;
  } else {
    // Otherwise, go to the previous slide
    currentSlide.value -= 1;
  }
}

const isYouTube = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};
const getYouTubeEmbedUrl = (url) => {
  const videoId = url.includes('youtube.com')
      ? new URL(url).searchParams.get('v')
      : url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
};

</script>

<template>
  <div class="home_video_carousel">
    <Carousel v-bind="settings" ref="myCarousel" v-model="currentSlide">
      <Slide v-for="(item, index) in store.videos" :key="index">
        <div class="w-full flex items-center justify-center gap-2.5 max-medium:gap-0">
          <div v-if="isYouTube(item.url)" class="w-[55rem] max-medium:w-full">
              <iframe
                  class="w-full"
                  height="544"
                  :src="getYouTubeEmbedUrl(item.url)"
                  allowfullscreen
              ></iframe>
          </div>
          <div v-else class="w-[562px] max-medium:w-full h-[545px] bg-red-500 gallery-video">
<!--            <source :src="item.url" type="video/mp4" />-->
            {{item.name}}
            <video-player
                :src="item.url"
                controls
                :loop="true"
                :volume="0.6"

                class="video-js  vjs-matrix vjs-fill vjs-big-play-centered"
                :height=600
                :width=562
            />
<!--            Your browser does not support the video tag.-->
          </div>
        </div>

      </Slide>
    </Carousel>
    <div class="flex flex-row items-center justify-center gap-2">
      <button @click="prevSlide">
        <span
            class="material-icons w-[26px] h-[27px] mr-[2rem]"
        >arrow_back</span>
      </button>

      <button @click="nextSlide">
        <span
            class="material-icons w-[26px] h-[27px]"
        >arrow_forward</span
        >
      </button>

    </div>
  </div>
</template>

<style scoped>

</style>