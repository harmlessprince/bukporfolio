<script setup>
import {onMounted} from 'vue'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import MeetUk from '@/assets/meetUk.png';
import Container from "@/components/Container.vue";
import HomeHeroSection from "@/components/HomeHeroSection.vue";
import Brands from "@/components/Brands.vue";
import Roles from "@/components/Roles.vue";
import Books from "@/components/Books.vue";
import Features from "@/components/Features.vue";
import Testimonies from "@/components/Testimonies.vue";
import Activities from "@/components/Activities.vue";
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import LinkedIn from '@/assets/linkedIn.svg';
import Instagram from '@/assets/instagram.svg';
import Role1 from '@/assets/role1.png';
import Role2 from '@/assets/role2.png';
import Role3 from '@/assets/role3.png';
import Role4 from '@/assets/role4.png';


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(".whoIamParagraph",
  { 
    y: 100,
    }, 
  {
    y: 0, 
    duration: 1, 
    scrollTrigger: {
    trigger: ".whoIamParagraph",
     start: "top 85%"
  },
  }); 

  let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 720px)", () => {
  // this setup code only runs when viewport is at least 800px wide
  gsap.fromTo(".meetUkImage",
  { 
    scale: 1.5,
    }, 
  {
  scale: 1, 
    duration: 2, 
    scrollTrigger: {
    trigger: ".meetUkImage",
    start: "top 85%"
  },
  }); 

});

mm.add("(max-width: 720px)", () => {
  // this setup code only runs when viewport is at least 800px wide
  gsap.fromTo(".meetUkImage",
  { 
    y: 100,
    }, 
  {
  y: 0, 
    duration: 0.5, 
    scrollTrigger: {
    trigger: ".meetUkImage",
    start: "top 80%"
  },
  }); 

});

});

</script>

<template>
  <div class="relative isolate space-y-[4.4em]">
    <div>
      <!-- hero/banner starts here -->
      <HomeHeroSection/>
      <!-- brands touched starts here -->
      <Brands/>
    </div>

    <!-- meet bright uk -->
    <section class="w-full bg-[#282309] max-large:px-3 max-small:py-[2rem]"> 
      <div class="w-full flex max-sm:flex-col items-start gap-[3em]">
        <div class="w-[53.1em] max-sm:w-full h-[63rem] max-sm:h-[40rem] relative meetUkImage">
          <img :src="MeetUk"
               class="w-full h-full relative" alt="brand"/>
        </div>

        <div class="max-w-[64.4em] max-sm:max-w-full text-[#E0E0E0] mt-[4rem] max-small:mt-[0.1rem] whoIamParagraph">
          <h1 class="font-[700] text-[3.2rem] leading-[4.2rem]">Meet Bright UK</h1>
          <div class="space-y-[1.6em] text-[1.6rem] leading-[2.4rem] font-[500] mt-[1.2rem]">
            <p>
            Bright 'UK' Ukwenga is a dynamic professional wearing multiple hats as a Speaker, Author, 
            Digital Entrepreneur, Psychologist, and Coach. He is renowned for his ability to ignite mental 
            transformations using his groundbreaking #SixthSense framework.
          </p>
            <p>
            Having earned a bachelor's degree in Electrical & Electronics Engineering from one of Africa's top Universities
           of Technology, Bright realized that his true passion lies in engineering minds rather than machines.
          </p>
          </div>

          <div class=" flex flex-row w-full justify-left items-center my-sm space-x-[1.4rem] mt-[4rem]">
            <a href="https://x.com/brightostle" target="_blank" rel="noopener noreferrer">
              <img :src="Twitter" class="w-[20px] h-[20px]" alt="icons" />
            </a>
            <a href="https://www.youtube.com/@brightuk_" target="_blank" rel="noopener noreferrer">
              <img :src="Youtube" class="w-[20px] h-[20px]" alt="icons" />
            </a>
            <a href="https://www.linkedin.com/in/brightuk/" target="_blank" rel="noopener noreferrer">
              <img :src="LinkedIn" class="w-[20px] h-[20px]" alt="icons" />
            </a>
            <a href="https://www.facebook.com/brightukwenga/" target="_blank" rel="noopener noreferrer">
              <img :src="Facebook" class="w-[20px] h-[20px]" alt="icons" />
            </a>
            <a href="https://www.instagram.com/bright.uk/" target="_blank" rel="noopener noreferrer">
              <img :src="Instagram" class="w-[20px] h-[20px]" alt="icons" />
            </a>       
          </div>
      
        </div>
      </div>


      <!-- <Container class="mt-[3.2rem] mb-[2.6rem]">
        <div class="flex max-sm:flex-col items-start bg-white gap-[3rem]">
          <div class="w-[56.1rem] max-sm:hidden max-sm:w-full h-[54.5rem] relative imgContainer meetBrightBoxImage">
            <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059221/who_i_am_jfd3xn.png"
                 class="w-full h-full relative" alt="brand"/>
            <div class="w-full absolute left-0 bottom-5">
              <img
                  src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059218/ukLogo_eavpu6.svg"
                  class="w-[113px] h-[113px] relative mx-auto"
                  alt="brand"
              />
            </div>
          </div>
          <div class="w-[39.2rem] max-sm:w-full meetBrightBoxText">
            <h3
              class="font-lg text-basic text-primaryColor font-primary mb-[0.7rem] max-sm:mb-0"
            >
              Who I am
            </h3>
            <h2 class="whoIamHeader font-header text-header max-sm:text-[3.0rem] text-secondary mb-[0.7rem]">
              Meet Bright UK
            </h2>
            <div class="font-normal text-regular text-basic my-[1rem] text-justify space-y-2">
              <p>
                Bright 'UK' Ukwenga is a dynamic professional wearing multiple
                hats as a Speaker, Author, Digital Entrepreneur, Psychologist, and
                Coach.
              </p>
              <p>
                He is renowned for his ability to ignite mental
                transformations using his groundbreaking #SixthSense framework.
              </p>
              <p>
                Having earned a bachelor's degree in Electrical & Electronics
                Engineering from one of Africa's top Universities of Technology,
                Bright realized that his true passion lies in engineering minds
                rather than machines.
              </p>


            </div>

            <button
                class="hover:scale-[1.2] border border-primary rounded-[8px] py-[1rem] px-[2rem] flex flex-row items-center"
            >
              <span class="font-sm text-xsm text-btnText mr-[1rem]"
              >Learn more</span
              >
              <img :src="RightArrow" class="w-[12px] h-[9px]" alt="arrow"/>
            </button>
          </div>
        </div> 
      </Container> -->
    </section>
    <!-- different roles of bright uk -->
    <Roles/>
    <!-- personal development section -->
    <Books/>
    <!-- gallery -->
    <!-- <section class="bg-basic text-center pt-[3rem]">
      <h3 class="font-lg text-basic text-primary font-primary">Gallery</h3>
      <h2 class="font-header text-header max-sm:text-[3.0rem] text-secondary">
        Bright UK Activities
      </h2>
      <div class="max-w-full bg-secondary">
        <Container>
          <Activities/>
        </Container>
      </div>
    </section> -->
    <!-- end of gallery -->

    <!-- start of testimonies -->
    <section class="py-[5rem] w-full bg-basic max-sm:mt-[2rem]">
      <Container>
        <div
            class="w-full h-[42.1rem] gap-[2.4rem] flex max-sm:flex-col justify-center items-center"
        >
          <div
              class="testimonialBoxImage grow w-full basis-0 shrink-0 h-full rounded-[10px] overflow-hidden max-sm:hidden">
            <img
                src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729082241/Document_from_Damilola_jab8od.jpg"
                class="w-full h-full object-top object-contain"
                alt="bright"
            />
          </div>

          <Testimonies class="testimonialBoxText"/>
        </div>
      </Container>
    </section>
    <!-- end of testimony -->

    <!-- start of featured on -->
    <Features/>
    <!-- end of featured -->
  </div>
</template>

<style scoped>
.imgContainer::before {
  position: absolute;
  top: -1.3rem;
  right: -2rem;
  content: "";
  background-image: url('../assets/meetframe.svg');
  background-size: cover;
  width: 98px;
  height: 98px;
}

</style>
