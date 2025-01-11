<script setup>
import Container from "@/components/Container.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";
import {gsap} from "gsap";
import {TextPlugin} from 'gsap/TextPlugin';
import {RoughEase} from 'gsap/EasePack'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(RoughEase);


const quotes = ref([
  {
    title: "TO CHANGE YOUR LIFE",
    description: "You are not disadvantaged as you think, you are only disadvantaged by your thinking",
  },
  {
    title: "TO ELEVATE YOUR LEADERSHIP",
    description: "Your growth is your factor of inspiration. As you grow into the best version of yourself, you give others the permission to do the same."
  },
  {
    title: "TO CREATE YOUR OWN POSSIBILITIES",
    description: "You can create wealth without capital if you know how to leverage capital beyond money."
  }
])

const quotesCount = ref(0)

const incrementCount = () => {
  quotesCount.value += 1;
}

const resetQuotesCount = () => {
  quotesCount.value = 0;
}

onMounted(() => {
  let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})
  let typingTL = gsap.timeline({repeat: -1})

  quotes.value.forEach((quote, index) => {
    let tl = gsap.timeline({repeat: 1, 
    yoyo: true,
    onComplete: () => {
      let zeroBasedQuotesLength = quotes.value.length - 1;
      zeroBasedQuotesLength > quotesCount.value ? incrementCount() : resetQuotesCount()
      gsap.fromTo(".subTextParagraph",
        {y: 100},
        {
          y: 0,
          duration: 1,
        });
    }});
    tl.to('.text', {
    duration: 3, 
    text: quote.title,
    })
    typingTL.add(tl)
  })

});


</script>

<template>
  <section class="bg-secondary max-sm:py-[3rem] h-[631px] max-md:h-[643px] max-sm:h-[519px]  xl:h-[631px]  2xl:h-[631px] relative homeHero flex items-center text-center max-sm:relative max-md:relative">
    <div class="absolute inset-0 bg-black opacity-50 hidden max-sm:block max-md:block"></div>
    <Container class="w-[95rem] text-center max-sm:relative max-md:relative">
      <div
          class="mt-[9rem] min-h-[15.2rem] text-white font-bold font-title text-[4.8rem] max-sm:text-[3rem] leading:[56px] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
        <div class="text-[#C7AE2E]">CHANGE YOUR THINKING</div>
        <div class=" small:max-large:min-h-[15rem]">
          <span class="text"></span>
         <span class="cursor">_</span>
        </div>
        
      </div>
      <div
          class="w-[65rem] max-medium:w-full min-h-[10rem] max-small:min-h-[12rem] text-[#fff] font-[500] max-medium:font-[400] max-medium:leading-[28px] leading-[32px] text-[2.4rem] max-medium:text-[1.8rem] mx-auto mb-[4.6rem] subTextParagraph">
        {{ quotes[quotesCount].description }}
      </div>
      <RouterLink
          :to="{name: 'contact'}"
      >
        <button
            class="hover:scale-[1.1] bg-primaryColor mx-auto w-[22.2rem] h-[5.5rem] max-medium:h-[4.5rem] rounded-[6px] border border-primary  text-[16px] text-[#242424] font-semibold  flex items-center justify-center self-start"
        >
          Book Bright UK
        </button>
      </RouterLink>
    </Container>
  </section>
</template>

<style scoped>

.homeHero {
  background-image: url('@/assets/1280_by_631_v1px.jpg');
  background-size:  100% 631px; /* w x h */
  background-repeat: no-repeat;
  background-position: center;
}

@media only screen and (min-width: 1500px) {
  .homeHero {
    background-size:  100% 750px;
  }
}

@media only screen and (max-width: 1500px) {
  .homeHero {
    background-size:  100% 750px;
  }
}

@media only screen and (max-width: 1280px) {
  .homeHero {
    background-size:  100%  631px;
    background-position: center;
  }
}
@media only screen and (max-width: 746px) {
  .homeHero {
    background-image: url('@/assets/hero_section_tap.png');
    background-size:  100% 643px; /* w x h */
  }
}

@media only screen and (max-width: 640px) {
  .homeHero {
    background-image: url('@/assets/mobile_screen.png');
    background-size:  100%  519px;
  }
}

</style>
