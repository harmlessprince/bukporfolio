<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutBanner from '@/assets/authorbanner.png';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/authorprofile.png';
import Books from "@/components/Books.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // InspirationCards animation
gsap.fromTo(".authorImageBox",
{ y: 150 }, 
{ y: 0, 
  duration: 1, 
  scrollTrigger: {
  trigger: ".authorImageBox",
  start: 'top 85%'
},
});

gsap.fromTo(".authorTextBox",
{ y: 150 }, 
{ y: 0, 
  duration: 1, 
  scrollTrigger: {
  trigger: ".authorTextBox",
  start: 'top 85%'
},
});
})

</script>

<template>

  <main class="text-primary">
    <!-- about hero section -->
     <section class="flex items-center justify-center relative h-[50rem] w-full bg-cover bg-no-repeat" 
     :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] max-sm:w-full text-basicText mx-auto text-center z-[200]">
        <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">Author</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
    </div>
  </section>

     <Container>
      <div class="w-full flex max-sm:flex-col max-sm:gap-y-[2rem] gap-x-[2rem] items-center my-[5rem] max-sm:my-[2rem]">
      <div class="w-[47.6rem] max-sm:w-full h-[39rem] rounded-[10px] authorImageBox"> 
        <img :src="WhoIam" class="w-full h-full rounded-[10px]" alt="bright"/>
      </div>
      <div class="w-[47.7rem] max-sm:w-full authorTextBox">
        <p class="font-xsm text-[2.4rem] max-medium:text-[2rem] text-[#2B2B2B]">
          As a prolific writer, Bright UK is the author of three books and many resourceful publications.
          He is a former contributor to Business Day Newspaper which is widely read across Nigeria and Ghana.
          He is th author of three books and many resourceful publication on leadership ,wealth and well-being
        </p>
      </div>
    </div>
  </Container>
  <!-- books-->
  <section class="w-full bg-[#F1F1F1] py-top mt-[1rem]">
    <Books/>
  </section>
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