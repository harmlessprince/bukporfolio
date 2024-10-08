<script setup>
import {useVideoStore} from "@/store/videos.store.js";
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import {onBeforeMount, ref, watch} from "vue";
const store = useVideoStore()
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})

onBeforeMount(() => {
  store.getVideos();
});

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
    <Carousel v-bind="settings">
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
          <div v-else>
            <source :src="item.url" type="video/mp4" />
            Your browser does not support the video tag.
          </div>
        </div>

      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>

</style>