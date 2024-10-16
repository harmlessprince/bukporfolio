<script setup>
import { onMounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import InspirationCard from '@/components/InspirationCard.vue';
import {useQuoteStore} from "@/store/quotes.store.js";
import {onBeforeMount} from "vue";

gsap.registerPlugin(ScrollTrigger);

const store = useQuoteStore()
onBeforeMount(() => {
  store.getQuotes();
});

onMounted(() => {
  // InspirationCards animation
gsap.fromTo(".scrollBox",
{ y: 150 }, 
{ y: 0, 
  duration: 1, 
  scrollTrigger: {
  trigger: ".scrollBox",
  start: 'top 90%'
},
});

gsap.fromTo(".bookBrightImage",
{ x: -400 }, 
{ x: 0, 
  duration: 1, 
  scrollTrigger: {
  trigger: ".bookBrightImage",
  start: 'top 60%'
},
});

gsap.fromTo(".bookBrightText",
{ y: 300 }, 
{ y: 0, 
  duration: 1, 
  scrollTrigger: {
  trigger: ".bookBrightText",
  start: 'top 100%'
},
});
})
</script>

<template>
  <main class="text-primary">
    <div class="relative h-[55rem] max-sm:w-full">
      <!-- Background image with opacity -->
      <div class="absolute inset-0 bg-black"></div>
      <div class="absolute inset-0  bg-cover bg-center"
           :style="{ 'background-image': 'url(https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059210/aboutbanner_wcwdup.png)' }"></div>
      <!-- Text on top of the image -->
      <div
          class="w-[47.7rem]  max-sm:w-full relative flex items-center flex-col justify-center h-full text-basic mx-auto text-center">
        <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">Speaker</h1>
        <p class="text-[#E1E1E1] font-xsm text-basic">Phenomenal, highly engaging sessions of insight, inspiration, and
          impact</p>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
    </div>

    <Container>
      <div class="w-full flex  max-sm:flex-col items-center mt-[5rem]">
        <div class="w-[47.6rem]  max-sm:w-full h-[47.9rem] rounded-[10px] bookBrightImage mr-[5rem] max-sm:mr-0">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059221/who_i_am_jfd3xn.png" class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-[47.7rem]  max-sm:w-full bookBrightText">
          <p class="font-xsm text-basic text-[#2B2B2B] mb-[2rem]">
            Bright UK has often been described as an old sage is a young body. As such, when he speaks, wise leaders pay
            keen attention. 
            As a frequent keynote speaker, Bright UK’s speaking expertise cuts across subjects that impact on behaviour
            in order to elevate the human condition, empower individuals, raise sound leaders, shape culture, and
            democratize prosperity. These include Leadership, Personal Development, Business, Career Advancement, and
            National Development. 
            His uncanny ability to extract wisdom from life, weave them into comprehensible frameworks and contemporary
            stories, and distill them in simple language endears him to both old and young, established veterans and
            upwardly mobile professionals alike. 
            He has been featured on notable media platforms and has spoken to diverse audiences including entrepreneurs
            and business leaders, faith-based organizations, academicians, etc. 
            He is in demand at conferences, seminars, and workshops across the nation. 
          </p>

          <RouterLink
              :to="{name: 'contact', query: {service: 'speaker'}}">
            <button
            class="hover:scale-[1.1] font-sm text-xsm text-secondary w-[20.4rem] h-[4.3rem] bg-primary rounded-[8px] flex justify-center items-center"
            >Book bright UK</button>
          </RouterLink>
        </div>
      </div>
    </Container>

    <!-- inspiration words from bright -->
    <section class="w-full bg-[#F1F1F1] py-top mt-[1rem] mb-[6rem]">
      <Container>
        <div class="w-full text-center mt-[2rem]">
          <Subheading title="Quotes"/>
          <Heading title="Inspirational words from Bright UK"/>
        </div>
        <div
            class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
        >
          <InspirationCard
              v-for="(item, index) in store.quotes"
              :title="item.title"
              :qoute="item.quote"
              :key="index"
              
          />

        </div>
      </Container>
    </section>
  </main>
</template>

<style scoped>
.speakerBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
}

</style>