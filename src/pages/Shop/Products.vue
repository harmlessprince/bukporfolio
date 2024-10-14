<script setup>
import AboutBanner from '@/assets/shopbanner.png';
import {ref, onMounted} from "vue";
import ShopProductSkeleton from '../../components/SkeletonLoader/ShopProductSkeleton.vue';
import Books from "@/components/Books.vue";

const skeletonLoader = ref(true)

onMounted(() => {
    // When the component is mounted, trigger setTimeout
    setTimeout(() => {
      skeletonLoader.value = false; // Stop loading after 3 seconds
    }, 3000);
  })

</script>

<template>
    <!-- about hero section -->
     <ShopProductSkeleton v-if="skeletonLoader" />
     <div v-else>
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
  </div>
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