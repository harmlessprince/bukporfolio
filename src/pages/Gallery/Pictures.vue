<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import Gallery from "@/components/PictureGallery.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';

let arrayOfImages = [
  'https://res.cloudinary.com/chiaka/image/upload/v1727719532/dynamic_fq4frf.webp',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://res.cloudinary.com/chiaka/image/upload/v1693628177/dwccca46gldtawppuafl.png',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://res.cloudinary.com/chiaka/image/upload/v1727719532/dynamic_fq4frf.webp',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
]

</script>

<template>
  <main class="text-secondary">
    <Navigation/>
    <!-- about hero section -->
    <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat"
             :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Gallery</h1>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primaryColor"> > Gallery</span><span
            class="text-primaryColor"> > Pictures</span>
        </div>
      </div>
    </section>

    <Container>
      <div class="mt-[3.4rem] mb-[1.7rem] text-center">
        <div
            class="w-[48.1rem] mb-[1.7rem] mx-auto bg-[#dddddd] rounded-[6px] font-[500] leading-[1.69rem] text-[1.4rem] flex flex-row">
          <button class="w-[24rem] h-[3.7rem] text-[#545454] rounded-[6px]">Video</button>
          <button class="w-[24rem] h-[3.7rem] bg-[#121212] text-[#FFF] rounded-[6px]">Pictures</button>
        </div>

        <Gallery :imageArray="arrayOfImages"/>

      </div>
    </Container>
    <Footer/>
  </main>
</template>

<style scoped>
.aboutBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

</style>