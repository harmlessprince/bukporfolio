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
    <!-- about hero section -->
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059209/authorbanner_lzjjj1.png"
        page="Author"
    />

    <Container>
      <div class="w-full flex max-sm:flex-col max-sm:gap-y-[2rem] gap-x-[2rem] items-center my-[5rem] max-sm:my-[2rem]">
        <div class="w-[47.6rem] max-sm:w-full h-[39rem] rounded-[10px] authorImageBox">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059221/who_i_am_jfd3xn.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
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