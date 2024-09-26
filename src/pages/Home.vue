<script setup>
import Navigation from '../components/navigation.vue'; 
import Heading from '../components/heading.vue';
import ProductCard from '../components/productcard.vue';
import Subheading from '../components/subheading.vue';
import HomeBanner from '@/assets/home_banner_background.png';
import HomeBright1 from '@/assets/home_banner_bright.png';
import Brand1 from '@/assets/brand1.svg';
import Brand2 from '@/assets/brand2.svg';
import WhoIam from '@/assets/who_i_am.svg';
import BrightTestimony from '@/assets/brightTestimony.png';
import RightArrow from '@/assets/rightArrow.svg';
import UkLogo from '@/assets/ukLogo.svg';
import Bright1 from '@/assets/bright1.png';
import Niyi from '@/assets/niyi.png';
import CommentIcon1 from '@/assets/commentIcon1.svg';
</script>

<template>
  <main class="text-primary">
    <Navigation />
    <!-- hero/banner starts here -->
   <section class="bg-secondary pt-[7rem] w-full relative text-basic pl-[13rem]">
    <img :src="HomeBanner" class="w-full h-[90vh] absolute top-[7rem] left-0" alt="homebanner" />
    <div class="relative z-[500] w-full h-[90vh] flex flex-row items-center"> 
      <div class="">
        <h1 class="text-basic text-hero font-hero">CHANGE YOUR THINKING</h1>
        <h2  class="text-primary text-[2.75rem] font-header">TO CHANGE YOUR LIFE</h2>
        <h3 class="text-[#949494] text-[24px] font-sm mb-[3rem] mt-[1rem]">You are not disadvantaged as you think, you are only disadvantaged <br/> by your thinking</h3>
        <button class="bg-primary rounded-[8px] border border-primary text-btnText text-xsm py-[1.3rem] px-[4rem] font-sm">Book Bright UK</button>
      </div>
      <img :src="HomeBright1" class="w-[32rem] h-[83vh]" alt="homebanner" />
    </div>
   </section>

   <!-- brands touched starts here -->
    <section class="bg-[#dadada] w-full text-center pt-[1rem] pb-[2rem]">
      <header class="text-[#727272] text-[1.5rem] font-lg">Some Brands Touched</header>
      <div class="mt-[1rem] flex flex-row items-center justify-center">
        <img :src="Brand1" class="w-[10.7rem] h-[4.1rem] mr-[2rem]" alt="brand" />
        <img :src="Brand2" class="w-[10.7rem] h-[4.1rem]" alt="brand" />
      </div>
    </section>

    <!-- meet bright uk -->
     <section class="px-[13rem] flex flex-row items-center py-[5rem]">
      <div class="w-[670px] h-[650px] mr-[2rem] relative">
        <img :src="WhoIam" class="w-[100%] h-[650px] relative" alt="brand" />
        <div class="w-full absolute left-0 bottom-5">
          <img :src="UkLogo" class="w-[113px] h-[113px] relative mx-auto" alt="brand" />
        </div>
       

      </div>
      <div class="w-[31%]">
        <Subheading title="Who I am" />
        <Heading title="Meet Bright UK" />
        <p class="font-sm text-regular text-basic mb-[2rem]">Bright 'UK' Ukwenga is a dynamic professional wearing multiple hats as a Speaker, 
          Author, Digital Entrepreneur, Psychologist, 
          and Coach. He is renowned for his ability to ignite mental transformations using his
           groundbreaking #SixthSense framework.
          Having earned a bachelor's degree in Electrical & Electronics 
          Engineering from one of Africa's top Universities of Technology, Bright realized that 
          his true passion lies in engineering minds rather than machines.
        </p>
        <button class="border border-primary rounded-[8px] py-[1rem] px-[2rem] flex flex-row items-center">
          <span class="font-sm text-xsm text-btnText mr-[1rem]">see more</span>
          <img :src="RightArrow" class="w-[12px] h-[9px]" alt="arrow" />
        </button>
      </div>
     </section>

     <div class="bg-bg1 px-[13rem] py-[5rem] flex flex-row flex-wrap justify-between">
      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] rounded-t-[10px] relative" alt="bright" />
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Trainer</div>
      </div>

      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright" />
        <div class="bg-primary text-xsm font-lg text-center text-basic rounded-b-[10px] py-[1rem]">Author</div>
      </div>

      <div class="w-[222px] rounded-[10px]">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright" />
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Entrepreneur</div>
      </div>

      <div class="w-[222px] rounded-[10px] bg-secondary">
        <img :src="Bright1" class="w-[100%] h-[241px] relative rounded-t-[10px]" alt="bright" />
        <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">Speaker</div>
      </div>

     </div>
     <!-- end of meet bright -->

     <!-- personal development section -->
      <section class="text-center px-[13rem] pt-[3rem]">
        <Subheading title="Books" />
        <Heading title="Personal Development Products" />
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
      <section class="text-center pt-[3rem]">
        <Subheading title="Gallery" />
        <Heading title="Bright UK Activities" />
        <div class="bg-secondary w-full flex flex-row px-[13rem] mt-[2rem]">
          <div class="mr-[3rem] w-[32rem]">
            <img :src="Bright1" class="w-full h-[332px]" alt="bright" />
            <img :src="Bright1" class="w-full h-[332px] mt-[1rem]" alt="bright" />
          </div>
          <!-- video -->
          <div class="pt-[1rem] text-center w-full">
          <Subheading title="Videos" />
          <headear class="text-xlg font-header text-[#f9f7ea]">Hear directly from Bright UK</headear>
          <div class="mt-[0.5rem] w-full h-[32rem]">
            <img :src="Bright1" class="w-full h-[32rem]" alt="bright" />
          </div>
          </div>
        </div>
      </section>
      <!-- end of gallery -->

      <!-- start of testimonies -->
      <section class="pt-top px-sides flex flex-row items-center">
        <img :src="BrightTestimony" class="w-[25rem] h-[27rem] rounded-[10px] mr-[3rem]" alt="bright" />
        <div class="w-full">
          <Subheading title="Testimony" />
          <Heading title="What People are Saying" />
          <div class="bg-[#F9F7EA] rounded-[10px] px-[1rem] py-[2rem] mt-[1rem]">
            <i class="font-sm text-secondary text-xlg">
              Bright UK has been one of the critical keys to Salesforce.com's leadership in cloud 
              computing and its growth into an over $6 billion dollar company.
            </i>

            <div class="flex flex-row justify-between items-end mt-[2rem]">
              <div class="flex flex-row">
                <img :src="Niyi" class="w-[55px] h-[59px] mr-[1rem]" alt="bright" />
                <span class="font-header text-xlg text-secondary">Niyi Adesanya <br/>
                <span class="font-sm text-[#838080] text-xsm">CEO of FifthGear Plus.</span>
                </span>
              </div>

              <img :src="CommentIcon1" class="w-[24px] h-[18px] mr-[1rem]" alt="comment" />
            </div>
          </div>


        </div>

      </section>
   
  </main>
</template>

<style scoped>

</style>