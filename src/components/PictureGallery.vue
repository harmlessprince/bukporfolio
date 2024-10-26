<script setup>

import {computed, onBeforeMount, ref} from "vue";
import PrimeVueImage from 'PrimeVueImage';
import Pagination from "@/components/Pagination.vue";
import PrimeVueGallery from 'PrimeVueGallery';
import {usePictureStore} from "@/store/pictures.store.js";

const pictureStore = usePictureStore()
const displayCustom = ref(false);
const activeIndex = ref(0);
const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
onBeforeMount(() => {
  pictureStore.getGalleryPictures();
});

const currentPage = ref(1);
const perPage = 8;
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return pictureStore.galleryPictures.slice(start, end);
})

function updatePage(page) {
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
  <div class="picture-gallery">
    <div
        class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(21.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
    >
      <div v-for="(image, index) in paginatedImages" :key="index"
           class="relative cursor-pointer h-[30rem]"
      >
        <PrimeVueImage :src="image.url" :alt="image.title" width="100%"
                       class="rounded-lg max-w-full h-full object-top object-cover" preview/>
      </div>
    </div>

<!--    <div class="card flex justify-center">-->
<!--      <PrimeVueGallery v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="pictureStore.galleryPictures" :responsiveOptions="responsiveOptions" :numVisible="7"-->
<!--                containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">-->
<!--        <template #item="slotProps">-->
<!--          <img :src="slotProps.item.url" :alt="slotProps.item.title" style="width: 100%; display: block" />-->
<!--        </template>-->
<!--        <template #thumbnail="slotProps">-->
<!--          <img :src="slotProps.item.thumbnail" :alt="slotProps.item.title" style="display: block" />-->
<!--        </template>-->
<!--      </PrimeVueGallery>-->

<!--      <div v-if="pictureStore.galleryPictures" class="grid grid-cols-12 gap-4" style="max-width: 400px">-->
<!--        <div v-for="(image, index) of pictureStore.galleryPictures" :key="index" class="col-span-4">-->
<!--          <img :src="image.thumbnail" :alt="image.title" style="cursor: pointer" @click="imageClick(index)" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!-- Pagination Controls -->
    <Pagination
        :currentPage="currentPage"
        :totalItems="pictureStore.pictures.length"
        :perPage="perPage"
        @updatePage="updatePage"
        v-if="pictureStore.pictures.length / perPage > 1 "
    />

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
.modalContainer {
  background-color: rgba(0, 0, 0, 0.4);
}

.modalImageContainer {
  width: 100%;
  height: auto;
  display: block;
}

.picture-gallery .p-image-toolbar div {
  border-color: #C7AE2E !important;
}
</style>
<style src="vue3-carousel/dist/carousel.css"></style>