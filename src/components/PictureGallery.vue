<script setup>

import {computed, ref} from "vue";
import PrimeVueImage from 'PrimeVueImage';

const imagesArray = [
  'https://res.cloudinary.com/chiaka/image/upload/v1727719532/dynamic_fq4frf.webp',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  'https://res.cloudinary.com/chiaka/image/upload/v1665640492/accjuckbfnpwqerrdayu.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
];

let modalImage = ref(null)
const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}
function showModal (img) {
  isShowModal.value = true
  modalImage.value = img;

}

const currentPage = ref(1);
const perPage = 8;

const totalPages = computed(() => Math.ceil(imagesArray.length / perPage));
const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return imagesArray.slice(start, end);
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
      <div
            class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(21.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
        >
        <div v-for="(image, index) in paginatedImages" :key="index"
            class="relative cursor-pointer h-[30rem]"
           >
          <PrimeVueImage :src="image" alt="Image" width="250"  class="rounded-lg h-full w-full" preview />
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
.modalContainer{
  background-color: rgba(0,0,0,0.4);
}

.modalImageContainer{
  width: 100%;
  height: auto;
  display: block;
}
</style>
<style src="vue3-carousel/dist/carousel.css"></style>