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

const currentPage = ref(1);
const perPage = 4;

const totalPages = computed(() => Math.ceil(videoArray.length / perPage));
const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return videoArray.slice(start, end);
})

function setPage(page) {
  currentPage.value = page;
}

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
</script>


<template>
  <div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(48.8rem,1fr))] w-full gap-2">
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
          />
        </div>
      </div>
    </div>
    <!-- Pagination Controls -->
    <div class="flex flex-row items-center justify-center text-center space-x-2 text-secondary mt-[2.4rem]">
      <button @click="previousPage()" :disabled="currentPage === 1" class="pagination_button"><<</button>

      <button
          v-for="page in totalPages"
          :key="page"
          @click="setPage(page)"
          :class="currentPage === page ? 'active' : ''"
          class="pagination_button"
      >
        {{ page }}
      </button>

      <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination_button">>></button>
    </div>
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