<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/cartbanner.png';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/who_i_am.png';
import Star from '@/assets/star.svg';
import Heading from '@/components/heading.vue';
</script>

<template>
  <main class="font-primary">
    <Navigation/>
        <!-- cart hero section -->
     <section class="flex items-center justify-center relative h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
        <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
          <h1 class="text-forty font-xlg text-basicColor">Cart</h1>
          <div class="font-lg text-basic">  
            <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Cart</span>
          </div>
        </div>
       </section>

       <Container>      
        <div class="flex flex-row font-sm text-xlg text-[#555454] leading-[24.2px] mt-[5rem]">
            <span class="ml-[2rem] mr-[33rem]">Product</span>
            <span class="mr-[8rem]">Price</span>
            <span class="mr-[16.4rem]">Quantity</span>
            <span>Total</span>
        </div>
        <div class="text-xlg font-sm text-secondaryColor border border-[#989898] rounded-[10px] leading-[24.2px]">
        <div class="px-[2.8rem] my-[1.4rem] flex flex-row items-center">
          <img :src="WhoIam" class="w-[8.5rem] h-[10rem] relative" alt="star"/> 
          <div class="w-[30rem] ml-[2.7rem]" >A long way down</div>
          <div class="w-[15rem] ml-[1em] mr-[2.7rem]">#550,000</div>

          <div class="w-[18.2rem] rounded-[5px] flex flex-row justify-between items-center mr-[10.1rem]">
            <button class="w-[5.4rem] h-[4.4rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tl-[5px] rounded-bl-[5px]">+</button>
            <span class="text-secondary font-sm text-xlg">1</span>
            <button class="w-[5.4rem] h-[4.4rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tr-[5px] rounded-br-[5px]">-</button>
        </div>
        <div class="w-[14rem] mr-[2em]">#550,000</div>
        <button class="w-[3.1rem] h-[3.1rem] text-secondary bg-[#dddddd] font-sm text-xlg">x</button>
        </div>

        <div class="px-[2.8rem] my-[1.4rem] flex flex-row items-center">
          <img :src="WhoIam" class="w-[8.5rem] h-[10rem] relative" alt="star"/> 
          <div class="w-[30rem] ml-[2.7rem]" >A long way down</div>
          <div class="w-[15rem] ml-[1em] mr-[2.7rem]">#550,000</div>

          <div class="w-[18.2rem] rounded-[5px] flex flex-row justify-between items-center mr-[10.1rem]">
            <button class="w-[5.4rem] h-[4.4rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tl-[5px] rounded-bl-[5px]">+</button>
            <span class="text-secondary font-sm text-xlg">1</span>
            <button class="w-[5.4rem] h-[4.4rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tr-[5px] rounded-br-[5px]">-</button>
        </div>
        <div class="w-[14rem] mr-[2em]">#550,000</div>
        <button class="w-[3.1rem] h-[3.1rem] text-secondary bg-[#dddddd] font-sm text-xlg">x</button>
        </div>
      </div>

      <div class="mt-[3rem] flex flex-row justify-between items-center leading-[24.2px]">
        <input type="text" class="focus:outline-none px-[2.7rem] font-sm text-xlg text-[9c9c9c] rounded-[10px] w-[31rem] h-[5.1rem] bg-[#dedede] border border-[#dedede]" placeholder="coupon" />
        <div class="text-xlg">
          <span class="font-sm  text-[#6d6d6d] mr-[3.7rem]">Total price</span>
          <span class="font-header text-secondary">#30,000</span>
        </div>
      </div>

      <div class="font-sm text-xsm text-secondary flex flex-row justify-between my-[3rem] mb-[5rem]">
        <button class="w-[30.8rem] h-[4.3rem] rounded-[8px] border border-primary">Continue shopping</button>
        <button class="w-[30.8rem] h-[4.3rem] rounded-[8px] bg-primary border border-primary">Proceed to checkout</button>
      </div>
    </Container>
      
    <Footer />  
    </main>
</template>

<style scoped>
</style>