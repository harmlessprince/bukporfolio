<script setup>
import {computed, ref} from "vue";

const videoArray = [
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166242/bukportfolio/videos/vid1_cthnlu.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166234/bukportfolio/videos/vid2_dy5vat.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166250/bukportfolio/videos/vid3_a0bmk3.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166970/bukportfolio/videos/vid4_sgigow.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166974/bukportfolio/videos/vid5_kc6oe2.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729167003/bukportfolio/videos/vid6_tpj8qy.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166981/bukportfolio/videos/vid7_zzfvnw.mp4",
  "https://res.cloudinary.com/ibreathcode/video/upload/v1729166985/bukportfolio/videos/vid8_hwn8ut.mp4",
]
import {VideoPlayer} from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import Pagination from "@/components/Pagination.vue";

const currentPage = ref(1);
const perPage = 4;
const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return videoArray.slice(start, end);
})

function updatePage(page) {
  currentPage.value = page;
}
</script>


<template>
  <div>
    <div
        class="gallery-video grid grid-cols-[repeat(auto-fill,minmax(35.7rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full gap-2">
      <div v-for="(path, index) in paginatedVideos" :key="index" class="h-full max-w-full">
        <div class="">
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
    <!--    <div class="flex flex-row items-center justify-center text-center space-x-2 text-secondary mt-[2.4rem]">-->
    <!--      <button @click="previousPage()" :disabled="currentPage === 1" class="pagination_button"><<</button>-->

    <!--      <button-->
    <!--          v-for="page in totalPages"-->
    <!--          :key="page"-->
    <!--          @click="setPage(page)"-->
    <!--          :class="currentPage === page ? 'active' : ''"-->
    <!--          class="pagination_button"-->
    <!--      >-->
    <!--        {{ page }}-->
    <!--      </button>-->

    <!--      <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination_button">>></button>-->
    <!--    </div>-->
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