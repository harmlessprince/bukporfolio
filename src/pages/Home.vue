<script setup>
import WhoIam from '@/assets/who_i_am.png';
import BrightTestimony from '@/assets/brightTestimony.png';
import RightArrow from '@/assets/rightArrow.svg';
import UkLogo from '@/assets/ukLogo.svg';
import Container from "@/components/Container.vue";
import HomeHeroSection from "@/components/HomeHeroSection.vue";
import Brands from "@/components/Brands.vue";
import Roles from "@/components/Roles.vue";
import Books from "@/components/Books.vue";
import Features from "@/components/Features.vue";
import Testimonies from "@/components/Testimonies.vue";
import Videos from "@/components/Videos.vue";
</script>

<template>
  <div class="text-primary relative isolate">
    <!-- hero/banner starts here -->
    <HomeHeroSection />
    <!-- brands touched starts here -->
    <Brands />

    <!-- meet bright uk -->
    <section class="">
      <Container class="mt-[3.2rem] mb-[2.6rem]">
        <div class="flex max-sm:flex-col items-center bg-white gap-[2.3rem]">
          <div class="w-[56.1rem] max-sm:hidden max-sm:w-full h-[54.5rem] relative imgContainer">
            <img :src="WhoIam" class="w-full h-full relative" alt="brand" />
            <div class="w-full absolute left-0 bottom-5">
              <img
                :src="UkLogo"
                class="w-[113px] h-[113px] relative mx-auto"
                alt="brand"
              />
            </div>
          </div>
          <div class="w-[39.2rem] px-6">
            <h3
              class="font-lg text-basic text-primary font-primary mb-[0.7rem] max-sm:mb-0"
            >
              Who I am
            </h3>
            <h2 class="font-header text-header max-sm:text-[3.0rem] text-secondary mb-[0.7rem]">
              Meet Bright UK
            </h2>
            <p class="font-sm text-regular text-basic my-[1rem]">
              Bright 'UK' Ukwenga is a dynamic professional wearing multiple
              hats as a Speaker, Author, Digital Entrepreneur, Psychologist, and
              Coach. He is renowned for his ability to ignite mental
              transformations using his groundbreaking #SixthSense framework.
              Having earned a bachelor's degree in Electrical & Electronics
              Engineering from one of Africa's top Universities of Technology,
              Bright realized that his true passion lies in engineering minds
              rather than machines.
            </p>
            <button
              class="border border-primary rounded-[8px] py-[1rem] px-[2rem] flex flex-row items-center"
            >
              <span class="font-sm text-xsm text-btnText mr-[1rem]"
                >see more</span
              >
              <img :src="RightArrow" class="w-[12px] h-[9px]" alt="arrow" />
            </button>
          </div>
        </div>
      </Container>
    </section>
    <!-- different roles of bright uk -->
    <Roles />
    <!-- personal development section -->
    <Books />
    <!-- gallery -->
    <section class="bg-basic text-center pt-[3rem]">
      <h3 class="font-lg text-basic text-primary font-primary">Gallery</h3>
      <h2 class="font-header text-header max-sm:text-[3.0rem] text-secondary">
        Bright UK Activities
      </h2>
      <div class="max-w-full bg-secondary">
        <Container>
          <Videos />
        </Container>
      </div>
    </section>
    <!-- end of gallery -->

    <!-- start of testimonies -->
    <section class="py-[5rem] w-full bg-basic">
      <Container>
        <div
          class="w-full h-[42.1rem] gap-[2.4rem] flex max-sm:flex-col justify-center items-center"
        >
          <div class="grow w-full basis-0 shrink-0 h-full rounded-[10px] overflow-hidden max-sm:hidden">
            <img
              :src="BrightTestimony"
              class="w-full h-full object-center object-cover"
              alt="bright"
            />
          </div>

          <Testimonies />
        </div>
      </Container>
    </section>
    <!-- end of testimony -->

    <!-- start of featured on -->
    <Features/>
    <!-- end of featured -->
  </div>
</template>

<style scoped>
.imgContainer::before {
  position: absolute;
  top: -1.3rem;
  right: -2rem;
  content: "";
  background-image: url('../assets/meetframe.svg');
  background-size: cover;
  width: 98px;
  height: 98px;
}
</style>
