<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import GalleryVideo from "@/components/GalleryVideo.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
</script>

<template>
  <main class="text-secondary">
    <Navigation/>
    <!-- hero section -->
     <section class="mt-[9rem] flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Gallery</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primaryColor"> > Gallery</span><span class="text-primaryColor"> > Videos</span>
        </div>
      </div>
     </section>

     <Container>
      <div class="mt-[3.4rem] mb-[1.7rem] text-center">
        <div class="w-[48.1rem] mb-[1.7rem] mx-auto bg-[#dddddd] rounded-[6px] font-[500] leading-[1.69rem] text-[1.4rem] flex flex-row">
          <button class="w-[24rem] h-[3.7rem] bg-[#121212] text-[#FFF] rounded-[6px]">Video</button>  
          <button class="w-[24rem] h-[3.7rem] text-[#545454] rounded-[6px]">Pictures</button>
        </div>

        <GalleryVideo  />
       
          </div>
     </Container>
    <Footer />  
    </main>
</template>

<style scoped>
.aboutBanner::after{
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