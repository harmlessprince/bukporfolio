<script setup>
import Container from "@/components/Container.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
import {RoughEase} from 'gsap/EasePack'

gsap.registerPlugin(ScrollTrigger);
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
    zeroBasedQuotesLength > quotesCount.value ? incrementCount() : resetQuotesCount()
    // gsap.fromTo(".subTextHeader",
    // { y: 25 },
    // { y: 0,
    //   duration: 0.4,
    //   scrollTrigger: {
    //   trigger: ".subTextHeader",
    // },
    // });

    gsap.fromTo(".subTextParagraph",
        {y: 100},
        {
          y: 0,
          duration: 0.4,
          //   scrollTrigger: {
          //   trigger: ".subTextParagraph",
          // },
        });
  }, 6000);

  // gsap.fromTo(".bannerImage ",
  //     {
  //       x: 100,
  //       scale: 1.5
  //     },
  //     {
  //       scale: 1,
  //       x: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ".bannerImage ",
  //       },
  //     });

  let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})
  let typingTL = gsap.timeline({repeat: -1})

  quotes.value.forEach((quote, index) => {
    console.log(quote)
    console.log(index)
    let tl = gsap.timeline({repeat: 1, yoyo: true});
    tl.to('.text', {duration: 3, text: quote.title})
    typingTL.add(tl)
  })


});

onBeforeUnmount(() => {
  // Cleanup if component is destroyed
  clearTimeout(timeoutId);
});


</script>

<template>
  <section class="bg-secondary max-sm:py-[3rem] h-[631px]  xl:h-[700px]  2xl:h-[1500px] relative homeHero flex items-center text-center">
    <Container class="w-[95rem] text-center">
      <div
          class="mt-[9rem] min-h-[15.2rem] text-white font-bold font-title text-[4.8rem] max-sm:text-[3rem] leading:[56px] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
        <span class="text-[#C7AE2E]">CHANGE YOUR THINKING </span>
        <span class="text"></span>
        <span class="cursor">_</span>
      </div>
      <div
          class="w-[65rem] max-medium:w-full min-h-[10rem] text-[#fff] font-[500] max-medium:font-[400] max-medium:leading-[28px] leading-[32px] text-[2.4rem] max-medium:text-[1.8rem] mx-auto mb-[4.6rem] subTextParagraph">
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
  background-image: url('@/assets/homeBannerBackground.png');
  background-size:  100% 631px;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 600px) {
  .homeHero {
    background-image: url('@/assets/homeBackgroundMobile.png');
  }
}

@media only screen and (min-width: 1500px) {
  .homeHero {
    background-size:  100% 1500px;
  }
}
@media only screen and (max-width: 1280px) {
  .homeHero {
    background-size:  100% 700px;
  }
}
</style>
