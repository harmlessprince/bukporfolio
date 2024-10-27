<script setup>
import Container from "@/components/Container.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { RoughEase } from 'gsap/EasePack'

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
        zeroBasedQuotesLength > quotesCount.value ?  incrementCount() : resetQuotesCount()
        // gsap.fromTo(".subTextHeader",
        // { y: 25 }, 
        // { y: 0, 
        //   duration: 0.4, 
        //   scrollTrigger: {
        //   trigger: ".subTextHeader",
        // },
        // });  

        gsap.fromTo(".subTextParagraph",
        { y: 100 }, 
        { y: 0, 
          duration: 0.4, 
        //   scrollTrigger: {
        //   trigger: ".subTextParagraph",
        // },
        }); 
      }, 6000);

      gsap.fromTo(".bannerImage ",
        { 
          x: 100,
          scale: 1.5
         }, 
        { scale: 1,
          x: 0, 
          duration: 1,
          scrollTrigger: {
          trigger: ".bannerImage ",
        },
        }); 

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
  <section class="bg-secondary max-sm:py-[3rem] h-[100vh] relative homeHero flex items-center text-center">
     <Container class="w-[95rem] text-center">  
      <div class="mt-[9rem] min-h-[15.2rem] text-white font-bold font-title text-[4.8rem] max-sm:text-[3rem] leading:[56px] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
        <span class="text-[#C7AE2E]">CHANGE YOUR THINKING </span> 
        <span class="text"></span>
        <span class="cursor">_</span>
      </div>
      <div class="w-[65rem] max-medium:w-full min-h-[10rem] text-[#fff] font-[500] max-medium:font-[400] max-medium:leading-[28px] leading-[32px] text-[2.4rem] max-medium:text-[1.8rem] mx-auto mb-[4.6rem] subTextParagraph">
        {{quotes[quotesCount].description}}
      </div>
      <RouterLink
      :to="{name: 'contact'}"
      >
   <button
   class="hover:scale-[1.1] bg-primaryColor mx-auto w-[22.2rem] h-[5.5rem] max-medium:h-[4.5rem] rounded-[6px] border border-primary text-btnText text-xsm py-[1.75rem] max-sm:py-[0.5rem] px-[6rem] font-sm flex items-center justify-center self-start"
   >
    Book Bright UK
   </button>
  </RouterLink>
  </Container>
    <!-- <Container
        class="w-[98rem] h-full overflow-hidden text-basic flex max-sm:flex-col justify-center items-center flex-nowrap gap-4"
    >
       <div class="grow-[2] flex-shrink-0 basis-0">
      
        <div class="text-white font-bold font-title text-[4.8rem] max-sm:text-[3.2rem] max-sm:leading-[44px] mb-[2.1rem] max-sm:mb-[1rem]">
          CHANGE YOUR THINKING TO
          <span
              class="text-primary font-bold font-title text-[3.5rem] max-small:text-[2.2rem]  mb-[2.1rem] block h-[15rem] max-small:h-[18.5rem] small:max-medium:h-[22rem] medium:max-large:h-[18.5rem] overflow-hidden">
              <ul class="block text-left [&_li]:block">
              <li class="mb-[4.4rem] max-sm:mb-0 mt-[1rem] max-sm:mt-0 max-sm:py-[2rem]">
                <header class="subTextHeader">{{quotes[quotesCount].title}}</header>
                <p class="subTextParagraph text-[#949494] text-[2rem] max-small:text-[1.5rem] font-normal mt-2 mb-[2.1rem] max-medium:leading-[32px] max-sm:mb-0">
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
      <div class="h-full w-full flex-grow flex-shrink-0 basis-0 max-sm:hidden bannerImage">
        <img
            src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059214/home_banner_bright_tn4yty.png"
            class="w-full h-full object-cover object-center"
            alt="homebanner"
        />
      </div>
    </Container> -->
  </section>
</template>

<style scoped>
.homeHero{
  background-image: url('@/assets/homeBannerBackground.png');
  background-size: 100% 100vh;
  background-repeat: no-repeat;
}
</style>
