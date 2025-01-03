<script setup>
import {onMounted} from 'vue'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Container from "@/components/Container.vue";
import Books from "@/components/Books.vue";
import HeroSection from "@/components/HeroSection.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // InspirationCards animation
  gsap.fromTo(".authorImageBox",
      {y: 150},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".authorImageBox",
          start: 'top 85%'
        },
      });

  gsap.fromTo(".authorTextBox",
      {y: 150},
      {
        y: 0,
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

    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1731501326/pexels-pixabay-159711_gtskue.jpg"
        page="Author"
        class="mb-[4rem] relative"
    >
      <template v-slot:overlay>
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </template>
      <template v-slot:description>
        <p class="text-white font-medium text-3xl w-1/2 text-center">
          As a prolific writer, Bright UK has authored three books and numerous publications on leadership, wealth, and well-being. He was also a contributor to BusinessDay Newspaper, which is widely read in Nigeria and Ghana.
        </p>
      </template>
    </HeroSection>

    <Container v-if="false">
      <div class="w-full flex max-sm:flex-col max-sm:gap-y-[2rem] gap-x-[2rem] items-center my-[5rem] max-sm:my-[2rem]">
        <div class="w-[47.6rem] max-sm:w-full max-h-full rounded-[10px] authorImageBox">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1730705045/Author_Image_fudbod.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-[47.7rem] max-sm:w-full authorTextBox">
          <div class="font-normal text-basic text-[#2B2B2B] mb-[2rem] leading-[2rem] text-justify space-y-2">
            <p>
              As a prolific writer, Bright UK is the author of three books and many resourceful publications.
              He is a former contributor to Business Day Newspaper which is widely read across Nigeria and Ghana.
              He is th author of three books and many resourceful publication on leadership, wealth and well-being.
            </p>
          </div>

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