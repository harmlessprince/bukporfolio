<script setup>

import {computed, ref} from "vue";
import PrimeVueImage from 'PrimeVueImage';
import Pagination from "@/components/Pagination.vue";

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

const currentPage = ref(1);
const perPage = 8;

const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return imagesArray.slice(start, end);
})

function updatePage(page) {
  currentPage.value = page;
}

</script>

<template>
      <div class="picture-gallery">
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
        <Pagination
            :currentPage="currentPage"
            :totalItems="imagesArray.length"
            :perPage="perPage"
            @updatePage="updatePage"
        />

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
.picture-gallery .p-image-toolbar div {
  border-color: #C7AE2E !important;
}
</style>
<style src="vue3-carousel/dist/carousel.css"></style>