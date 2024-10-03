<script setup>
import AboutBanner from '@/assets/shopbanner.png';
import Books from "@/components/Books.vue";
</script>

<template>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative h-[50rem] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center">
        <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">Shop</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > shop</span>
        </div>
      </div>
     </section>
    <section class="mb-[25rem]">
      <Books />
    </section>
</template>

<style scoped>
.aboutBanner::after{
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