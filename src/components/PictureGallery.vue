<script setup>

import {computed, onBeforeMount, ref} from "vue";
import PrimeVueImage from 'PrimeVueImage';
import Pagination from "@/components/Pagination.vue";
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