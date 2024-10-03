<script setup>

import HomeBanner from "@/assets/home_banner_background.png";
import HomeBright1 from "@/assets/home_banner_bright.png";
import Container from "@/components/Container.vue";
import {ref} from "vue";

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
  },
  {
    title: "CHANGE YOUR LIFE",
    description: "You are not disadvantaged as you think, you are only disadvantaged by your thinking",
  },
])
</script>

<template>
  <section class="bg-secondary mt-[9.3rem] max-sm:py-[3rem] h-[52.2rem] max-sm:h-full relative">
    <Container
        class="w-[98rem] h-full overflow-hidden text-basic flex max-sm:flex-col justify-center items-center flex-nowrap gap-4"
        :style="{ 'background-image': 'url(' + HomeBanner + ')' }"
    >
      <div class="grow-[2] flex-shrink-0 basis-0">
        <div class="text-white font-bold font-title text-[4.8rem] max-sm:text-[3.6rem] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
          CHANGE YOUR THINKING TO
          <span
              class="text-primary font-bold font-title text-[3.5rem] mb-[2.1rem] block h-[15rem] overflow-hidden">
            <ul class="block text-left [&_li]:block animate-text-slide-3">

              <li class="mb-[4.4rem]" v-for="(item, index) in quotes" :key="index" :aria-hidden="index === quotes.length - 1 ? 'true' : 'false'">
                 <span>{{item.title}}</span>
                 <p class="text-[#949494] text-[2rem] font-normal mt-2 max-sm:text-[2.4rem] mb-[2.1rem] max-sm:mb-[1rem]">
                   {{item.description}}
                  </p>
              </li>
            </ul>
          </span>
          <button
              class="bg-primary rounded-[6px] border border-primary text-btnText text-xsm py-[1.75rem] px-[6rem] font-sm"
          >
            Book Bright UK
          </button>
        </div>
      </div>
      <div class="h-full w-full flex-grow flex-shrink-0 basis-0 max-sm:hidden">
        <img
            :src="HomeBright1"
            class="w-full h-full object-cover object-center"
            alt="homebanner"
        />
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>
