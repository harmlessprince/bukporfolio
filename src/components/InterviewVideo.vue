<script setup>
import {computed, ref} from "vue";

const videoArray = [
  "https://youtu.be/JN5tNDOa_Po?si=Ve5W3EgnGIBBD2W_",
  "https://youtu.be/V3zvh7Uw5os?si=q_uGNj7tkrf2ptW4",
  "https://youtu.be/HiTs5oVOrW4?si=jhUknRlKi0UF8OcQ",
  "https://youtu.be/sYhLU80J6mI?si=0Tbann1SxWE9uM6t",
  "https://youtu.be/JJXSrKnJT8c?si=AVUg9-yG7thEB1fQ",
  "https://youtu.be/hQat4dhhjVQ?si=8Q-EmXNBdwcyK9RZ",
  "https://youtu.be/FkgyspIC7eY?si=VVBkD9GtC0rv670I",
  "https://youtu.be/LpazSsUS2PU?si=OSS8qJdaAOeMnikB",
  "https://youtu.be/6WMl7l4gRk8?si=HCXXwYUUoh9afFpc"

  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166242/bukportfolio/videos/vid1_cthnlu.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166234/bukportfolio/videos/vid2_dy5vat.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166250/bukportfolio/videos/vid3_a0bmk3.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166970/bukportfolio/videos/vid4_sgigow.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166974/bukportfolio/videos/vid5_kc6oe2.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729167003/bukportfolio/videos/vid6_tpj8qy.mp4",
  // "https://res.cloudinary.com/ibreathcode/video/upload/v1729166981/bukportfolio/videos/vid7_zzfvnw.mp4",
]
import {VideoPlayer} from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import Pagination from "@/components/Pagination.vue";

const currentPage = ref(1);
const perPage = 9;
const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return videoArray.slice(start, end);
})

function updatePage(page) {
  currentPage.value = page;
}

const getYouTubeEmbedUrl = (url) => {
  const videoId = url.includes('youtube.com')
      ? new URL(url).searchParams.get('v')
      : url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
};
const isYouTube = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};
</script>


<template>
  <div>
    <div
        class="gallery-video grid grid-cols-[repeat(auto-fill,minmax(33.7rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full gap-[2.4rem]">
      <div v-for="(path, index) in paginatedVideos" :key="index" class="max-w-full">
        <div v-if="isYouTube(path)">
          <iframe
              class="w-full"
              height="362px"
              width="357px"
              :src="getYouTubeEmbedUrl(path)"
              allowfullscreen
          ></iframe>
        </div>
        <div v-else>
          <video-player
              :src="path"
              controls
              :loop="true"
              :volume="0.6"
              :height="362"
              :width=357
              :fluid="true"
              class="vjs-matrix video-js vjs-big-play-centered"
          />
        </div>
      </div>
    </div>
    <!-- Pagination Controls -->
    <Pagination
        :currentPage="currentPage"
        :totalItems="videoArray.length"
        :perPage="perPage"
        @updatePage="updatePage"
    />
  </div>
</template>

<style scoped>

.pagination_button {
  @apply w-[3.2rem] h-[3.2rem] rounded-[0.8rem] flex items-center justify-center border-[0.1rem] border-[#F1F1F1] p-[1rem] font-bold;
}

.active {
  @apply bg-secondary text-white;
}

</style>