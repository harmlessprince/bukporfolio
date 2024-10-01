<script setup>
import UkLogo from '@/assets/ukLogo.svg';
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Instagram from '@/assets/instagram.svg';
</script>

<template>
  <footer class="mt-[5rem] text-center w-full bg-[#0f0f13] py-[1rem] text-[#fff] fixed inset-x-0 bottom-0">
    <img :src="UkLogo" class="w-[6.4rem] h-[6.4rem] mx-auto" alt="footer logo" />

    <div class="text-basic font-xsm flex flex-row w-full justify-center mt-sm">
      <RouterLink :to="{ name: 'home'}" class="mr-[3rem] hover:text-primary">Home</RouterLink>
      <RouterLink :to="{ name: 'speaker'}" class="mr-[3rem] hover:text-primary">About</RouterLink>
      <span class="mr-[3rem] hover:text-primary">Services</span>
      <span class="mr-[3rem] hover:text-primary">Get in touch</span>
      <span class="hover:text-primary">FAQS</span>
    </div>

    <div class=" flex flex-row w-full justify-center items-center my-sm">
        <img :src="Twitter" class="w-[20px] h-[20px] mr-[1rem]" alt="icons" />
         <img :src="Youtube" class="w-[20px] h-[20px] mr-[1rem]" alt="icons" />
        <img :src="LinkedIn" class="w-[20px] h-[20px] mr-[1rem]" alt="icons" />
        <img :src="Facebook" class="w-[20px] h-[20px] mr-[1rem]" alt="icons" />
        <img :src="Instagram" class="w-[20px] h-[20px]" alt="icons" />
    </div>

    <div class="border border-basic  border-x-0 border-b-0 border-t-[1px] pt-[0.5rem] text-center font-xsm text-basic text-xsm">
        Copyright © Bright UK 2024. All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped>

</style>