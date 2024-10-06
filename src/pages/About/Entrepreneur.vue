<script setup>
import AboutBanner from '@/assets/enterpreneurbanner.png';
import Container from "@/components/Container.vue";
import Scribe from '@/assets/scribe.png';
import {useEntrepreneurStore} from "@/store/entrepreneur.store.js";
import {onBeforeMount} from "vue";

const store = useEntrepreneurStore()
onBeforeMount(() => {
  store.getEntrepreneurs();
});


</script>

<template>
    <!-- about hero section -->
  <section class="">
    <div class="relative h-[55rem]">
      <!-- Background image with opacity -->
      <div class="absolute inset-0 bg-black"></div>
      <div class="absolute inset-0  bg-cover bg-center"
           :style="{ 'background-image': 'url(' + AboutBanner + ')' }"></div>
      <!-- Text on top of the image -->
      <div class="w-[47.7rem]  max-sm:w-full relative flex items-center flex-col justify-center h-full text-basic mx-auto text-center">
        <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">ENTREPRENEUR</h1>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
    </div>
  </section>


    <Container>

      <!-- scribe div flex -->
      <div v-for="(item, index) in store.entrepreneurs" :key="index">
        <div v-if="index%2 === 0">
          <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-4 my-[5rem] max-sm:my-[3.7rem]">
            <div class="animate-slideInLeft delay-200">
              <div class="w-[47.7rem] max-sm:w-full">
                <img :src="item.logo" class="w-full rounded-[10px]" :class="store.entrepreneurs.length < 1 ? 'animate-pulse': '' " alt="bright"/>
              </div>
            </div>
            <div class="animate-slideInRight delay-200">
              <div class="w-[47.8rem] max-sm:w-full p-[1.5rem] bg-secondary rounded-[10px] text-basicColor flex flex-col justify-between h-full">
                <header class="font-header text-xlg">{{item.title}}</header>
                <p class="font-sm text-xsm mb-[1rem]">
                  {{item.body}}
                </p>
                <a class="w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px] flex items-center justify-center" :href="item.website">Visit our website</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            <div class="animate-slideInLeft delay-400">
              <div class="w-[47.8rem] max-sm:w-full p-[1.5rem] bg-secondary rounded-[10px] text-basicColor flex flex-col justify-between h-full">
                <header class="font-header text-xlg">{{item.title}}</header>
                <p class="font-sm text-xsm mb-[1rem]">
                  {{item.body}}
                </p>
                <a class="w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px] flex items-center justify-center" :href="item.website">Visit our website</a>
              </div>
            </div>
            <div class="animate-slideInRight delay-400">
              <div class="w-[47.7rem] max-sm:w-full">
                <img :src="item.logo" class="w-full  rounded-[10px]" alt="bright"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
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