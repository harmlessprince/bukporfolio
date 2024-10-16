<script setup>

import Container from "@/components/Container.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const quotes = ref([
  {
    title: "CHANGE YOUR LIFE",
    description: "You are not disadvantaged as you think, you are only disadvantaged by your thinking",
  },
  {
    title: "ELEVATE YOUR LEADERSHIP",
    description: "Your growth is your factor of inspiration. As you grow into the best version of yourself, you give others the permission to do the same."
  },
  {
    title: "CREATE YOUR OWN POSSIBILITIES",
    description: "You can create wealth without capital if you know how to leverage capital beyond money."
  }
])

const quotesCount = ref(1)
let timeoutId;

const incrementCount = () => {
  quotesCount.value += 1;
}

const resetQuotesCount = () => {
  quotesCount.value = 0;
}

    onMounted(() => {
      timeoutId = setInterval(() => {
        let zeroBasedQuotesLength = quotes.value.length - 1;
        zeroBasedQuotesLength > quotesCount.value ?  incrementCount() : resetQuotesCount()
        gsap.fromTo(".subTextBox",
        { y: 150 }, 
        { y: 0, 
          duration: 1, 
          scrollTrigger: {
          trigger: ".subTextBox",
        },
        });    
      }, 5000);
    });

    onBeforeUnmount(() => {
      // Cleanup if component is destroyed
      clearTimeout(timeoutId);
    });


</script>

<template>
  <section class="bg-secondary mt-[9.3rem] max-sm:py-[3rem] h-[52.2rem] max-sm:h-full relative">
    <Container
        class="w-[98rem] h-full overflow-hidden text-basic flex max-sm:flex-col justify-center items-center flex-nowrap gap-4"
        :style="{ 'background-image': 'url(https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729078294/home_banner_background_qs1ged.png)' }"
    >
       <div class="grow-[2] flex-shrink-0 basis-0">
      
        <div class="text-white font-bold font-title text-[4.8rem] max-sm:text-[3.6rem] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
          CHANGE YOUR THINKING TO
          <span
              class="text-primary font-bold font-title text-[3.5rem] mb-[2.1rem] block h-[15rem] max-small:h-[26.5rem] small:max-medium:h-[22rem] medium:max-large:h-[18.5rem] overflow-hidden">
            <!-- <ul class="block text-left [&_li]:block animate-text-slide-3"> -->
              <ul class="block text-left [&_li]:block subTextBox">
              <!-- <li class="max-h-[45rem] mb-[4.4rem] max-sm:mb-0 mt-[1rem] max-sm:mt-0 max-sm:py-[2rem]" v-for="(item, index) in quotes" :key="index" :aria-hidden="index === quotes.length - 1 ? 'true' : 'false'">
                 <span>{{item.title}}</span>
                 <p class="text-[#949494] text-[2rem] font-normal mt-2 max-sm:text-[1.rem] mb-[2.1rem] max-sm:mb-0">
                   {{item.description}}
                  </p>
              </li> -->
              <li class="mb-[4.4rem] max-sm:mb-0 mt-[1rem] max-sm:mt-0 max-sm:py-[2rem]">
                <span>{{quotes[quotesCount].title}}</span>
                <p class="text-[#949494] text-[2rem] font-normal mt-2 mb-[2.1rem] max-medium:leading-[32px] max-sm:mb-0">
                  {{quotes[quotesCount].description}}
                 </p>
             </li>
            </ul>
          </span>
          <RouterLink
              :to="{name: 'contact'}"
          >
           <button
           class="hover:scale-[1.1] hover:ml-[1.2rem] bg-primary w-[22.2rem] rounded-[6px] border border-primary text-btnText text-xsm py-[1.75rem] max-sm:py-[0.5rem] px-[6rem] font-sm flex items-center justify-center self-start"
           >
            Book Bright UK
           </button>
          </RouterLink>
        </div>
      </div>
      <div class="h-full w-full flex-grow flex-shrink-0 basis-0 max-sm:hidden">
        <img
            src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059214/home_banner_bright_tn4yty.png"
            class="w-full h-full object-cover object-center"
            alt="homebanner"
        />
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>
