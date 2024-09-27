<script setup>
import Navigation from '../components/navigation.vue';
import Sidebar from '../components/sidebar.vue'; 
import Footer from '../components/footer.vue'; 
import Heading from '../components/heading.vue';
import ProductCard from '../components/productcard.vue';
import Subheading from '../components/subheading.vue';
import HomeBanner from '@/assets/home_banner_background.png';
import HomeBright1 from '@/assets/home_banner_bright.png';
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
import { FwbCarousel } from 'flowbite-vue'
</script>

<template>
  <main class="text-primary">
    <Navigation />
    <Sidebar />
    <!-- hero/banner starts here -->


    <!-- brands touched starts here -->
    <section class="bg-[#dadada] w-full text-center pt-[1rem] pb-[2rem]">
      <header class="text-[#727272] text-[1.5rem] font-lg">Some Brands Touched</header>
      <div class="mt-[1rem] flex flex-row items-center justify-center">
        <img :src="Brand1" class="w-[10.7rem] h-[4.1rem] mr-[2rem]" alt="brand"/>
        <img :src="Brand2" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
      </div>
    </section>

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

    <div class="bg-bg1 px-sides py-[5rem] flex flex-row flex-wrap justify-between">
      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] rounded-t-[10px] relative" alt="bright"/>
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Trainer</div>
      </div>

      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright"/>
        <div class="bg-primary text-xsm font-lg text-center text-basic rounded-b-[10px] py-[1rem]">Author</div>
      </div>

      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright"/>
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Entrepreneur</div>
      </div>

      <div class="w-[222px] rounded-[10px] bg-secondary">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright"/>
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Speaker</div>
      </div>

    </div>
    <!-- end of meet bright -->

    <!-- personal development section -->
    <section class="text-center px-sides pt-[3rem] bg-white">
      <Subheading title="Books"/>
      <Heading title="Personal Development Products"/>
      <div class="grid grid-cols-3 grid-flow-row gap-1 mt-[2rem]">
        <ProductCard
            title="A long way down"
            description="A book that let you know how long you need to go"
            price="10,000"
            url="https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png"
        />

        <ProductCard
            title="A long way down"
            description="A book that let you know how long you need to go"
            price="10,000"
            url="https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png"
        />

        <ProductCard
            title="A long way down"
            description="A book that let you know how long you need to go"
            price="10,000"
            url="https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png"
        />
      </div>
    </section>

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
          <headear class="text-xlg font-header text-[#f9f7ea]">Hear directly from Bright UK</headear>
          <div class="w-full h-[34rem]">
            <video controls width="100%" class="h-[34rem]">
              <source src="@/assets/video1.webm" type="video/webm" />
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
      <div class="w-[35rem]">
        <Subheading title="Testimony"/>
        <Heading title="What People are Saying"/>
        <!-- this part will be dynamic, we will work on it -->
        <div class="bg-[#F9F7EA] rounded-[10px] px-[1rem] py-[2rem] mt-[1rem]">
          <i class="font-sm text-secondary text-xlg">
            Bright UK has been one of the critical keys to Salesforce.com's leadership in cloud
            computing and its growth into an over $6 billion dollar company.
          </i>

          <div class="flex flex-row justify-between items-end mt-[2rem]">
            <div class="flex flex-row">
              <img :src="Niyi" class="w-[55px] h-[59px] mr-[1rem]" alt="bright"/>
              <span class="font-header text-xlg text-secondary">Niyi Adesanya <br/>
                <span class="font-sm text-[#838080] text-xsm">CEO of FifthGear Plus.</span>
                </span>
            </div>
            <img :src="CommentIcon1" class="w-[24px] h-[18px] mr-[1rem]" alt="comment"/>
          </div>
        </div>
        <div class="mt-[2rem] flex flex-row justify-between items-center">
          <div>
            <!-- using google material icon, cdn link is in the index page -->
            <span class="material-icons w-[26px] h-[27px] text-[#B5B5B5] mr-[2rem] ">arrow_back</span>
            <span class="material-icons w-[26px] h-[27px] text-[#151515]">arrow_forward</span>
          </div>

          <div class="flex flex-row">
            <img :src="Niyi" class="w-[42px] h-[45px]" alt="bright"/>
            <img :src="Niyi" class="w-[42px] h-[45px] opacity-50" alt="bright"/>
            <img :src="Niyi" class="w-[42px] h-[45px] opacity-50" alt="bright"/>
            <img :src="Niyi" class="w-[42px] h-[45px] opacity-50" alt="bright"/>
          </div>
        </div>
        <!-- dynamic part of testimony ends here -->
      </div>
    </div>
    </Container>
    </section>
    <!-- end of testimony -->

    <!-- start of featured on -->
    <section class="px-sides flex items-center py-top bg-white">
      <div class="font-header text-xlg text-[#0F0F13] mr-[2rem] no-wrap w-[9rem]">Featured on:</div>
      <div class="flex flex-row justify-between items-center w-full">
        <img :src="Brand1" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
        <img :src="Brand2" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
        <img :src="Brand1" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
        <img :src="Brand2" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
        <img :src="Brand1" class="w-[10.7rem] h-[4.1rem]" alt="brand"/>
      </div>
    </section>
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