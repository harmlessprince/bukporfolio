<script setup>

import HomeBanner from "@/assets/home_banner_background.png";
import HomeBright1 from "@/assets/home_banner_bright.png";
import Container from "@/components/Container.vue";
</script>

<template>
  <section class="bg-secondary mt-[9.3rem] h-[52.2rem] relative">
    <Container
      class="w-[98rem] h-full overflow-hidden text-basic flex justify-center items-center flex-nowrap gap-4"
      :style="{ 'background-image': 'url(' + HomeBanner + ')' }"
    >
      <div class="grow-[2] flex-shrink-0 basis-0">
        <div>
          <h1 class="text-white font-bold font-title text-[4.8rem] mb-[2.1rem]">
            CHANGE YOUR THINKING
          </h1>
          <h2
            class="text-primary font-bold font-title text-[3.5rem] mb-[2.1rem]"
          >
            TO CHANGE YOUR LIFE
          </h2>
          <h3 class="text-[#949494] text-[2rem] mb-[4.4rem] font-normal">
            You are not disadvantaged as you think, you are only disadvantaged
            by your thinking
          </h3>
          <button
            class="bg-primary rounded-[6px] border border-primary text-btnText text-xsm py-[1.75rem] px-[6rem] font-sm"
          >
            Book Bright UK
          </button>
        </div>
      </div>
      <div class="h-full w-full flex-grow flex-shrink-0 basis-0">
        <img
          :src="HomeBright1"
          class="w-full h-full object-cover object-center"
          alt="homebanner"
        />
      </div>
    </Container>
  </section>
</template>

<style scoped></style>
