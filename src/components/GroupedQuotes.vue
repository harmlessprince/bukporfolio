<script setup>
import Quotation from '@/assets/quote.png';
import {Carousel, Slide} from 'vue3-carousel';
import {ref} from "vue";

const props = defineProps(['title', "quotes", "icon", "index"])
const carouselRef = ref();
const currentSlide = ref(0);
const slideTo = (nextSlide) => {
  console.log(nextSlide);
  console.log("Before: ", currentSlide.value);
  currentSlide.value = nextSlide
  console.log("After: ",currentSlide.value);
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
      class="inspirationContainer cursor-pointer relative w-full min-h-[28.4rem] rounded-[40px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex items-center justify-center"
      :style="{'background-color': `#e8d29b`}"

  >
    <div class="text-center text-[#000] iconDiv">
      <img :src="props.icon" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
      <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
    </div>
    <div
        class="qoutation text-[#000] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px] absolute top-0 left-0 pt-[4rem] pb-[0.5rem]">
      <img :src="Quotation" class="absolute top-[1.5rem] right-[1.5rem] w-[2.5rem] z-50 h-[2.5rem]"
           alt="about speaker bright uk"/>
      <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
        <img :src="props.icon" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
        <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
      </div>
      <div class="flex flex-col justify-between">
        <div class="flex mb-2">
          <div  v-for="(slide, index) in props.quotes" :key="index" v-show="index === currentSlide">
            <p class="text-left">{{ slide }}</p>
          </div>
        </div>
        <div class="flex space-x-[0.5rem] justify-end items-center">
          <button
              v-for="(_, index) in props.quotes"
              :key="`${index}`+'button'"
              @click="slideTo(index)"
              :class="index === currentSlide ? 'bg-black text-white' : 'bg-gray-50 text-black'"
              class="round_pagination_button "
          >
          </button>
          <p>{{currentSlide + 1}}/{{props.quotes.length}}</p>
        </div>
      </div>
    </div>
  </div>

  <div
      v-else
      class="inspirationContainer cursor-pointer relative w-full min-h-[28.4rem] rounded-[40px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex items-center justify-center"
      :style="{'background-color': `#ddd7c8`}"
  >

    <div class="text-center text-[#000] iconDiv">
      <img :src="props.icon" class="w-[11.3rem] z-50 h-[11.7rem] mx-auto" alt="about speaker bright uk"/>
      <header class="text-[2.2rem] leading-[24px] font-[700] mt-[1.5rem]">{{ props.title }}</header>
    </div>
    <div
        class="qoutation text-[#000] font-[400] text-[1.4rem] px-[1.6rem] leading-[20px] absolute top-0 left-0 pt-[4rem] pb-[0.5rem]">
      <img :src="Quotation" class="absolute top-[1.5rem] right-[1.5rem] w-[2.5rem] z-50 h-[2.5rem]"
           alt="about speaker bright uk"/>
      <div class="flex flex-row gap-x-[0.5rem] mb-[1rem] items-center">
        <img :src="props.icon" class="w-[2.5rem] z-50 h-[2.5rem]" alt="about speaker bright uk"/>
        <header class="text-[1.8rem] leading-[24px] font-[700]">{{ props.title }}</header>
      </div>
      <!--      {{ props.quotes.slice(0, 400) }}-->
    </div>
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

}

.inspirationContainer:hover {
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

.round_pagination_button {
  @apply w-[1px] h-[1px] p-[7px] rounded-full flex items-center justify-center border-[0.1rem] border-[#F1F1F1] font-bold;
}
</style>