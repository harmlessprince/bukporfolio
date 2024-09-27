<script setup>

import HomeBanner from "@/assets/home_banner_background.png";
import HomeBright1 from "@/assets/home_banner_bright.png";
import Container from "@/components/Container.vue";
</script>

<template>
  <section class="bg-secondary">
    <Container :style="{ 'background-image': 'url(' + HomeBanner + ')' }">
      <section class="bg-secondary w-full text-basic pl-sides" >
        <div class="w-full h-[80vh] flex flex-row items-center">
          <div class="">
            <h1 class="text-basic text-hero font-hero">CHANGE YOUR THINKING</h1>
            <h2  class="text-primary text-[2.75rem] font-header">TO CHANGE YOUR LIFE</h2>
            <h3 class="text-[#949494] text-[24px] font-sm mb-[3rem] mt-[1rem]">You are not disadvantaged as you think, you are only disadvantaged <br/> by your thinking</h3>
            <button class="bg-primary rounded-[8px] border border-primary text-btnText text-xsm py-[1.3rem] px-[4rem] font-sm">Book Bright UK</button>
          </div>
                  <img :src="HomeBright1" class="w-[32rem] h-[83vh]" alt="homebanner" />
        </div>
      </section>
    </Container>
  </section>

</template>

<style scoped>

</style>