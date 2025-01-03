<script setup>
import king from '@/assets/king.png';
import Quotation from '@/assets/quote.png';
import {FwbButton, FwbModal} from 'flowbite-vue'

const props = defineProps(['title', "quote", "img","ind"])
</script>

<template>

  <div
    v-if="ind%2 === 0"
      class="inspirationContainer cursor-pointer relative w-full min-h-[28.4rem] rounded-[10px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex items-center justify-center"
       :style="{'background-color': `#e8d29b`}"
      >
      <!-- <img :src="Quotation" class="w-[3.3rem] z-50 h-[2.7rem] absolute top-5 right-3" alt="book"/> -->
    <!-- <div 
      id="overlay"
      class="absolute w-full h-[5rem] rounded-[10px] bottom-0 left-0 bg-[#000000B3]">
      <header class="text-[2rem] leading-[24px] font-[700] text-[#FFEE95] px-[1.6rem] pt-[1.6rem]">{{ props.title }}</header>
      <p 
      id="quote"
      class="text-[#fff] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px]"
      >{{ props.quote.slice(0, 650) }}</p>
    </div> -->
    <!--    <div>-->
    <!--      <fwb-button @click="showModal" class="bg-transparent text-primary">-->
    <!--        Read more-->
    <!--      </fwb-button>-->
    <!--    </div>-->

    <div class="text-center text-[#000] iconDiv">
      <img :src="king" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
      <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
    </div>
    <div class="qoutation text-[#000] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px] absolute top-0 left-0 pt-[4rem] pb-[0.5rem]">
      <img :src="Quotation" class="absolute top-[1.5rem] right-[1.5rem] w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
      <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
        <img :src="king" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
        <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
      </div>
      {{ props.quote.slice(0, 400) }}
    </div>
  </div>

  <div
  v-else
    class="inspirationContainer cursor-pointer relative w-full min-h-[28.4rem] rounded-[10px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex items-center justify-center"
     :style="{'background-color': `#ddd7c8`}"
    >
    <!-- <img :src="Quotation" class="w-[3.3rem] z-50 h-[2.7rem] absolute top-5 right-3" alt="book"/> -->
  <!-- <div 
    id="overlay"
    class="absolute w-full h-[5rem] rounded-[10px] bottom-0 left-0 bg-[#000000B3]">
    <header class="text-[2rem] leading-[24px] font-[700] text-[#FFEE95] px-[1.6rem] pt-[1.6rem]">{{ props.title }}</header>
    <p 
    id="quote"
    class="text-[#fff] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px]"
    >{{ props.quote.slice(0, 650) }}</p>
  </div> -->
  <!--    <div>-->
  <!--      <fwb-button @click="showModal" class="bg-transparent text-primary">-->
  <!--        Read more-->
  <!--      </fwb-button>-->
  <!--    </div>-->

  <div class="text-center text-[#000] iconDiv">
    <img :src="king" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
    <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
  </div>
  <div class="qoutation text-[#000] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px] absolute top-0 left-0 pt-[4rem] pb-[0.5rem]">
    <img :src="Quotation" class="absolute top-[1.5rem] right-[1.5rem] w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
    <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
      <img :src="king" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
      <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
    </div>
    {{ props.quote.slice(0, 400) }}
  </div>
</div>
</template>

<style scoped>
#overlay{
  transition: all 1s ease-in-out;
}

.qoutation{
  display: none;
  width: 0;
  transition: all 1s ease-in-out;
 
}

.inspirationContainer:hover{
  border-left: 7px solid #C7AE2E;
}

.inspirationContainer:hover .qoutation {
  width: 100%;
  display: block;
  transition: all 1s ease-in-out;
}

.inspirationContainer:hover .iconDiv {
  display: none;
  transition: all 1s ease-in-out;
}
</style>