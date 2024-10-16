<script setup>

import {computed, ref, onMounted} from "vue";
import { FwbButton, FwbModal } from 'flowbite-vue'

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

// const currentIndex = ref(0)
// function setSlide(index) {
//   currentIndex.value = index
// }
// function nextSlide() {
//   currentIndex.value = (currentIndex.value + 1) % images.value.length;
// }
// setInterval(() => {
//   nextSlide();
// }, 3000);
// Function to go to the previous slide
// function prevSlide() {
//   currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
// }
// function getOffset(index) {
//   const slideHeight = 180; // Height of each image (18rem)
//   const maxVisibleSlides = 5; // Number of visible slides
//   const totalHeight = maxVisibleSlides * slideHeight;

  // Calculate the offset to slide images upward
  // const currentSlidePosition = currentIndex.value * slideHeight;
  // const indexPosition = index * slideHeight;

  // If the current index is beyond the visible area, slide it up
//   return Math.min(0, totalHeight - indexPosition - currentSlidePosition);
// }

</script>

<template>
      <div
            class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(21.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
        >
        <div v-for="(image, index) in paginatedImages" :key="index" 
            @click="showModal(image)"
            class="relative cursor-pointer transition-transform duration-700 ease-in-out rounded-lg h-[30rem]"
           >
          <img class="rounded-lg h-full w-full" :src="image" alt="">
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

    <!-- modal popup -->
    <div :class='!isShowModal ? "hidden" : "modalContainer fixed top-[9rem] py-[1rem] left-0 z-[200] w-full h-[100vh] overflow-y-auto"'> 
      <div class="modalImageContainer py-[1rem] relative max-w-[111rem] bg-[#fff] mx-auto">
        <div @click="closeModal" class="material-icons text-[2.5rem] text-[#000] absolute top-[1rem] right-[1rem] cursor-pointer hover:bg-[#D3D3D3] ">close</div>
        <img class="modalImage mx-auto" :src="modalImage" alt="">
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