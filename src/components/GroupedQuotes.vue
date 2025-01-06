<script setup>
import Quotation from '@/assets/quote.png';
import {Carousel, Slide} from 'vue3-carousel';
import {ref} from "vue";

const props = defineProps(['title', "quotes", "icon", "index"])
const carouselRef = ref();
const currentSlide = ref(0);
const slideTo = (nextSlide) => {
  currentSlide.value = nextSlide
};

const quotesConfig = {
  itemsToShow: 1,
  wrapAround: false,
  mouseDrag: false,
  touchDrag: false,
};
</script>

<template>
  
  <div
      v-if="index%2 === 0"
      class="inspirationContainer relative cursor-pointer w-full h-[35rem] rounded-[40px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0"
      :style="{'background-color': `#e8d29b`}"
  >
    <!-- <div class="quoteIcon absolute top-10 left-[4rem]">
      <img :src="Quotation" class="w-[2.5rem] h-[2.5rem]" alt="quote icon"/>
    </div> -->
    <!--    Front start-->
    <div class="text-center text-[#000] iconDiv h-full flex flex-col items-center justify-center">
      <img :src="props.icon" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
      <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
    </div>
    <!--    Front end-->
    <!--    Back start-->
       
    <div 
    class="qoutation relative"
    >
      <div>
        <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
          <img :src="props.icon" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
          <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img :src="Quotation" class="opacity-40 w-[20.5rem] h-[20.5rem] mx-auto" alt="quote icon"/>
      </div>
        <div class="flex mb-2">
          <div v-for="(slide, index) in props.quotes" :key="index" v-show="index === currentSlide">
            <p class="text-left">{{ slide.substring(0, 500) }}</p>
          </div>
        </div>
      </div>

      <div class="flex space-x-[0.5rem] justify-end items-center mt-auto relative z-50">
        <button
            v-for="(_, index) in props.quotes"
            :key="`${index}`+'button'"
            @click="slideTo(index)"
            :class="index === currentSlide ? 'bg-black text-white' : 'bg-gray-50 text-black'"
            class="round_pagination_button "
        >
        </button>
        <p>{{ currentSlide + 1 }}/{{ props.quotes.length }}</p>
      </div>

    </div>
  </div>

  <div
      v-else
      class="inspirationContainer cursor-pointer w-full h-[35rem] rounded-[40px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 "
      :style="{'background-color': `#ddd7c8`}"
  >
    <!--    Front start-->
    <div class="text-center text-[#000] iconDiv h-full flex flex-col items-center justify-center">
      <img :src="props.icon" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
      <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
    </div>
    <!--    Front end-->
    <!--    Back start-->
    <div class="qoutation relative">
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img :src="Quotation" class="opacity-40 w-[20.5rem] h-[20.5rem] mx-auto" alt="quote icon"/>
      </div>
      <div>
        <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
          <img :src="props.icon" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
          <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
        </div>
        <div class="flex mb-2">
          <div v-for="(slide, index) in props.quotes" :key="index" v-show="index === currentSlide">
            <p class="text-left">{{ slide.substring(0, 500) }}</p>
          </div>
        </div>
      </div>

      <div class="flex space-x-[0.5rem] justify-end items-center mt-auto relative z-50">
        <button
            v-for="(_, index) in props.quotes"
            :key="`${index}`+'button'"
            @click="slideTo(index)"
            :class="index === currentSlide ? 'bg-black text-white' : 'bg-gray-50 text-black'"
            class="round_pagination_button "
        >
        </button>
        <p>{{ currentSlide + 1 }}/{{ props.quotes.length }}</p>
      </div>

    </div>
    <!--    Back End-->
  </div>
</template>

<style scoped>
#overlay {
  transition: all 1s ease-in-out;
}

.qoutation {
  display: none;
  width: 0;
  transition: all 1s ease-in-out;
  @apply text-[#000] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px] pb-[0.5rem];

}

.quoteIcon{
  display: none;
  width: 0;
  transition: all 1s ease-in-out;
}

.inspirationContainer:hover {
  border-left: 7px solid #C7AE2E;
}

.inspirationContainer:hover .qoutation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: left;
  padding-bottom: 35px;
  transition: all 1s ease-in-out;
  height: 100%;
}

.inspirationContainer:hover .quoteIcon {
  transition: all 1s ease-in-out;
 
}

.inspirationContainer:hover .iconDiv {
  display: none;
  transition: all 1s ease-in-out;
}

.round_pagination_button {
  @apply p-[7px] rounded-full flex items-center justify-center border-[0.1rem] border-[#F1F1F1] font-bold;
}
</style>