<script setup>

import {ref} from "vue";

const images = ref([
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',

  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
]);
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
// // Function to go to the previous slide
// function prevSlide() {
//   currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
// }
// function getOffset(index) {
//   const slideHeight = 180; // Height of each image (18rem)
//   const maxVisibleSlides = 5; // Number of visible slides
//   const totalHeight = maxVisibleSlides * slideHeight;
//
//   // Calculate the offset to slide images upward
//   const currentSlidePosition = currentIndex.value * slideHeight;
//   const indexPosition = index * slideHeight;
//
//   // If the current index is beyond the visible area, slide it up
//   return Math.min(0, totalHeight - indexPosition - currentSlidePosition);
// }
import {Carousel, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0)

function slideTo(val) {
  currentSlide.value = val
}
</script>

<template>
  <!--  <div class="flex flex-row gap-5">-->
  <!--    <div class="flex flex-col max-h-[90rem] gap-5 overflow-hidden">-->
  <!--      <div v-for="(image, index) in images" :key="index"-->
  <!--           class="relative cursor-pointer transition-transform duration-700 ease-in-out"-->
  <!--           @click="setSlide(index)"-->
  <!--      >-->
  <!--        <img class="rounded-lg object-cover h-[18rem] w-full" :src="image" alt="">-->
  <!--        <div v-if="currentIndex === index" class="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="flex flex-col items-center justify-center duration-700 ease-in-out">-->
  <!--      <img class="max-h-[90rem] max-w-full rounded-lg" :src="images[currentIndex]" alt="">-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="flex flex-row gap-5">
    <div class="flex flex-col max-h-[90rem] gap-5">
      <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
      >
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
        </Slide>
      </Carousel>
    </div>
    <div class="flex flex-col items-center justify-center duration-700 ease-in-out">

    </div>
  </div>

</template>

<style scoped>
.grid {
  gap: 1rem;
}
</style>
<style src="vue3-carousel/dist/carousel.css"></style>