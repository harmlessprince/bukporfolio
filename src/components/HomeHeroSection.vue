<script setup>

import HomeBanner from "@/assets/home_banner_background.png";
import HomeBright1 from "@/assets/home_banner_bright.png";
</script>

<template>
  <section class="bg-secondary pt-[7rem] w-full relative text-basic pl-sides">
    <img :src="HomeBanner" class="w-full h-[90vh] absolute top-[7rem] left-0" alt="homebanner" />
    <div class="relative z-[500] w-full h-[90vh] flex flex-row items-center">
      <div class="">
        <h1 class="text-basic text-hero font-hero">CHANGE YOUR THINKING</h1>
        <h2  class="text-primary text-[2.75rem] font-header">TO CHANGE YOUR LIFE</h2>
        <h3 class="text-[#949494] text-[24px] font-sm mb-[3rem] mt-[1rem]">You are not disadvantaged as you think, you are only disadvantaged <br/> by your thinking</h3>
        <button class="bg-primary rounded-[8px] border border-primary text-btnText text-xsm py-[1.3rem] px-[4rem] font-sm">Book Bright UK</button>
      </div>
      <img :src="HomeBright1" class="w-[32rem] h-[83vh]" alt="homebanner" />
    </div>
  </section>
</template>

<style scoped>

</style>