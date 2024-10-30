<script setup>
import Quotation from '@/assets/quotation.png';
import Inspiration from '@/assets/inspiration.png';
import { gsap } from "gsap";
import {ref} from 'vue'
import {FwbButton, FwbModal} from 'flowbite-vue'

const props = defineProps(['title', "quote", "img","ind"])
</script>

<template>

  <div
      class="inspirationContainer cursor-pointer relative bg-cover bg-no-repeat w-full min-h-[28.4rem] rounded-[10px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex flex-col justify-between gap-[1rem]"
       :style="{'background-image': `url(${img})`}"
      >
      <img :src="Quotation" class="w-[3.3rem] z-50 h-[2.7rem] absolute top-5 right-3" alt="book"/>
    <div 
      id="overlay"
      class="absolute w-full h-[5rem] rounded-[10px] bottom-0 left-0 bg-[#000000B3]">
      <header class="text-[2rem] leading-[24px] font-[700] text-[#FFEE95] px-[1.6rem] pt-[1.6rem]">{{ props.title }}</header>
      <p 
      id="quote"
      class="text-[#fff] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px]"
      >{{ props.quote }}</p>
    </div>
    <!--    <div>-->
    <!--      <fwb-button @click="showModal" class="bg-transparent text-primary">-->
    <!--        Read more-->
    <!--      </fwb-button>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
#overlay{
  transition: all 1s ease-in-out;
}

#quote{
  display: none;
  transition: all 1s ease-in-out;
}

.inspirationContainer:hover #overlay {
  height: 28.4rem;
  transition: all 1s ease-in-out;
}

.inspirationContainer:hover #quote {
  display: block;
  transition: all 1s ease-in-out;
}
</style>