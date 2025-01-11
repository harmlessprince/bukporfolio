<script setup>
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Instagram from '@/assets/instagram.svg';
import { useRoute } from 'vue-router';

const route = useRoute(); 
const isRouteActive = (link, routePath) => {
      if(link === "about"){
        return /^\/about/.test(route.path);
      }
      if(link === "shop"){
        return /^\/shop/.test(route.path);
      }

      if(link === "blog"){
        return /^\/blog/.test(route.path);
      }

      return route.path === routePath;
    };
</script>

<template>
  <footer class="text-center w-full bg-[#141105] py-[1rem] text-[#fff] footer">
    <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059218/ukLogo_eavpu6.svg" class="w-[6.4rem] h-[6.4rem] mx-auto" alt="footer logo" />

    <div class="text-basicText space-x-[3rem] max-medium:space-x-0 max-medium:space-y-[3rem] font-xsm flex flex-row max-medium:flex-col w-full justify-center mt-sm max-medium:text-center">
     <span> 
      <RouterLink :to="{ name: 'home'}" 
      :class='isRouteActive("", "/") ? "mainNavLinkActive" : "mainnavlink"'
      >Home</RouterLink>
    </span>
     <span> 
      <RouterLink :to="{ name: 'speaker'}" 
      :class='isRouteActive("about", "") ? "mainNavLinkActive" : "mainnavlink"'
      >About</RouterLink>
    </span>
      <span>
        <RouterLink :to="{ name: 'events'}" 
        :class='isRouteActive("", "/events") ? "mainNavLinkActive" : "mainnavlink"'
        >Events</RouterLink></span>
        <span>
          <RouterLink :to="{ name: 'books'}"
          :class='isRouteActive("shop", "") ? "mainNavLinkActive" : "mainnavlink"'
          >Shop</RouterLink></span>
          <span><RouterLink :to="{ name: 'contact'}" 
            :class='isRouteActive("", "/contact") ? "mainNavLinkActive" : "mainnavlink"'
            >Get in touch</RouterLink></span>
            <span><RouterLink :to="{ name: 'blog'}" 
              :class='isRouteActive("blog", "") ? "mainNavLinkActive" : "mainnavlink"'
              >Blog</RouterLink></span>
    </div>

    <div class=" flex flex-row w-full justify-center items-center my-sm space-x-[1rem]">
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
.mainnavlink{
  border-bottom: 0 solid #000;
  transition: all 1s ease;
}

.mainnavlink:hover{
  transition: all 1s ease;
  color: #C7AE2E;
  border-bottom: 4px solid #C7AE2E;

}

.mainNavLinkActive{
  color: #C7AE2E;
  border-bottom: 4px solid #C7AE2E;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>