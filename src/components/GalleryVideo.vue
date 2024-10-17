<script setup>
import {computed, ref} from "vue";

const videoArray = [
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
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
    <div class="gallery-video grid grid-cols-[repeat(auto-fill,minmax(48.8rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full gap-2">
      <div v-for="(path, index) in paginatedVideos" :key="index" class="h-auto max-w-full">
        <div>
          <video-player
              :src="path"
              controls
              :loop="true"
              :volume="0.6"
              :height=468
              :width=488
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