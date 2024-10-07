<script setup>
import UkLogo from '@/assets/ukLogo.svg';
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Instagram from '@/assets/instagram.svg';
</script>

<template>
  <footer class="text-center w-full bg-[#0f0f13] py-[1rem] text-[#fff] footer">
    <img :src="UkLogo" class="w-[6.4rem] h-[6.4rem] mx-auto" alt="footer logo" />

    <div class="text-basicText space-x-[3rem] max-sm:space-x-0 max-sm:space-y-[3rem] font-xsm flex flex-row max-sm:flex-col w-full justify-center mt-sm max-sm:text-center">
     <span> <RouterLink :to="{ name: 'home'}" class="hover:text-primaryColor">Home</RouterLink></span>
     <span> <RouterLink :to="{ name: 'speaker'}" class=" hover:text-primaryColor">About</RouterLink></span>
      <span><RouterLink :to="{ name: 'gallery'}" class=" hover:text-primaryColor">Gallery</RouterLink></span>
        <span> <RouterLink :to="{ name: 'products'}" class=" hover:text-primaryColor">Shop</RouterLink></span>
          <span><RouterLink :to="{ name: 'contact'}" class=" hover:text-primaryColor">Get in touch</RouterLink></span>
            <span><RouterLink :to="{ name: 'blog'}" class=" hover:text-primaryColor">Blog</RouterLink></span>
    </div>

    <div class=" flex flex-row w-full justify-center items-center my-sm space-x-[1rem]">
      <!-- <RouterLink :to="{ name: 'speaker'}" class=" hover:text-primaryColor">Get in touch</RouterLink> -->
      <a href="https://x.com/brightostle" target="_blank" rel="noopener noreferrer">
        <img :src="Twitter" class="w-[20px] h-[20px]" alt="icons" />
      </a>
      <a href="https://www.youtube.com/@brightuk_" target="_blank" rel="noopener noreferrer">
        <img :src="Youtube" class="w-[20px] h-[20px]" alt="icons" />
      </a>
      <a href="https://www.linkedin.com/in/brightuk/" target="_blank" rel="noopener noreferrer">
        <img :src="LinkedIn" class="w-[20px] h-[20px]" alt="icons" />
      </a>
      <a href="https://www.facebook.com/brightukwenga/" target="_blank" rel="noopener noreferrer">
        <img :src="Facebook" class="w-[20px] h-[20px]" alt="icons" />
      </a>
      <a href="https://www.instagram.com/bright.uk/" target="_blank" rel="noopener noreferrer">
        <img :src="Instagram" class="w-[20px] h-[20px]" alt="icons" />
      </a>       
    </div>

    <div class="border border-basic  border-x-0 border-b-0 border-t-[1px] pt-[0.5rem] text-center font-xsm text-basic text-xsm">
        Copyright © Bright UK 2024. All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}
</style>