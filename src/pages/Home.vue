<script setup>
import Navigation from '@/components/navigation.vue';
import Sidebar from '@/components/sidebar.vue';
import Footer from '@/components/footer.vue';
import Heading from '@/components/heading.vue';
import ProductCard from '@/components/productcard.vue';
import Subheading from '@/components/subheading.vue';
import Brand1 from '@/assets/brand1.svg';
import Brand2 from '@/assets/brand2.svg';
import WhoIam from '@/assets/who_i_am.png';
import BrightTestimony from '@/assets/brightTestimony.png';
import RightArrow from '@/assets/rightArrow.svg';
import UkLogo from '@/assets/ukLogo.svg';
import Bright1 from '@/assets/bright1.png';
import Niyi from '@/assets/niyi.png';
import CommentIcon1 from '@/assets/commentIcon1.svg';
import Container from "@/components/Container.vue";
import HomeHeroSection from "@/components/HomeHeroSection.vue";
import Brands from "@/components/Brands.vue";
import Roles from "@/components/Roles.vue";
import Books from "@/components/Books.vue";
import Features from "@/components/Features.vue";
import Testimonies from "@/components/Testimonies.vue";
</script>

<template>
  <main class="text-primary">
    <Navigation/>
    <Sidebar/>
    <!-- hero/banner starts here -->
    <HomeHeroSection/>
    <!-- brands touched starts here -->
    <Brands/>

    <!-- meet bright uk -->
    <section class="px-sides flex flex-row items-center py-[5rem] bg-white">
      <!-- imgContainer is used in the style at the end of the code for the dots background -->
      <div class="w-[670px] h-[650px] mr-[2rem] relative imgContainer">
        <img :src="WhoIam" class="w-[100%] h-[650px] relative" alt="brand"/>
        <div class="w-full absolute left-0 bottom-5">
          <img :src="UkLogo" class="w-[113px] h-[113px] relative mx-auto" alt="brand"/>
        </div>
      </div>
      <div class="w-[35%]">
        <Subheading title="Who I am"/>
        <Heading title="Meet Bright UK"/>
        <p class="font-sm text-regular text-basic my-[1rem]">Bright 'UK' Ukwenga is a dynamic professional wearing
          multiple hats as a Speaker,
          Author, Digital Entrepreneur, Psychologist,
          and Coach. He is renowned for his ability to ignite mental transformations using his
          groundbreaking #SixthSense framework.
          Having earned a bachelor's degree in Electrical & Electronics
          Engineering from one of Africa's top Universities of Technology, Bright realized that
          his true passion lies in engineering minds rather than machines.
        </p>
        <button class="border border-primary rounded-[8px] py-[1rem] px-[2rem] flex flex-row items-center">
          <span class="font-sm text-xsm text-btnText mr-[1rem]">see more</span>
          <img :src="RightArrow" class="w-[12px] h-[9px]" alt="arrow"/>
        </button>
      </div>
    </section>
    <Roles/>
    <!-- personal development section -->
    <Books/>
    <!-- gallery -->
    <section class="bg-basic text-center pt-[3rem]">
      <Subheading title="Gallery"/>
      <Heading title="Bright UK Activities"/>
      <div class="max-w-full bg-secondary">
        <!-- <div class="max-w-[61rem] my-0 mx-auto"> -->
        <Container>
          <div class="w-full flex flex-row justify-between mt-[2rem]">
            <div class="w-[24.5rem]">
              <img :src="Bright1" class="w-full h-[332px]" alt="bright"/>
              <img :src="Bright1" class="w-full h-[332px] mt-[1rem]" alt="bright"/>
            </div>
            <!-- video -->
            <div class="pt-[1rem] text-center w-[35rem]">
              <Subheading title="Videos"/>
              <header class="text-xlg font-header text-[#f9f7ea]">Hear directly from Bright UK</header>
              <div class="w-full h-[34rem]">
                <video controls width="100%" class="h-[34rem]">
                  <source src="@/assets/video1.webm" type="video/webm"/>
                  Your browser does not support the video tag.
                </video>

                <!-- <vueper-slides class="video-slider" bullets>
                  <vueper-slide>
                    <video controls width="100%">
                      <source src="@/assets/video1.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </vueper-slide>

                  <vueper-slide>
                    <video controls width="100%">
                      <source src="@/assets/video1.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </vueper-slide>
                </vueper-slides> -->
                <!-- <vueper-slides  class="h-[34rem] bg-basic">
                  <vueper-slide
                  class="h-[34rem] bg-basic"
                   v-for="(slide, i) in slides"
                  :key="i"
                  :video= slide.video
                  /> -->
                <!-- <vueper-slide>
                  hello -->
                <!-- <template>
                <video controls width="100%" height="100%">
                  <source src="@/assets/video1.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </template> -->
                <!-- </vueper-slide>
                <vueper-slide> -->
                <!-- <video controls  width="100%" height="100%">
                  <source src="@/assets/video1.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video> -->
                <!-- hello world
              </vueper-slide> -->
                <!-- </vueper-slides> -->
              </div>
            </div>
          </div>
        </Container>
        <!-- </div> -->
      </div>
    </section>
    <!-- end of gallery -->

    <!-- start of testimonies -->
    <section class="py-top w-full bg-basic">
      <Container>
        <div class="w-full flex flex-row justify-between items-center">
          <img :src="BrightTestimony" class="w-[25rem] h-[27rem] rounded-[10px]" alt="bright"/>
          <Testimonies/>
        </div>
      </Container>
    </section>
    <!-- end of testimony -->

    <!-- start of featured on -->
    <Features/>
    <!-- end of featured -->
    <Footer/>

  </main>
</template>

<style scoped>
.imgContainer::before {
  position: absolute;
  top: -1.3rem;
  right: -1.3rem;
  content: "";
  background-image: url('../assets/meetframe.svg');
  background-size: cover;
  width: 98px;
  height: 98px;
}

</style>