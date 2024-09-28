<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/enterpreneurbanner.png';
import Container from "@/components/Container.vue";
import Scribe from '@/assets/scribe.png';
import Africhamp from "@/assets/africhamp.png";
import SixthSense from '@/assets/sixthSense.png';
import Heading from '@/components/heading.vue';
import Subheading from '@/components/subheading.vue';
import UkLogo from '@/assets/ukLogo.svg';


</script>

<template>
  <main class="text-primary">
    <Navigation/>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">ENTREPRENEUR</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
     </section>

     <Container>
      <!-- scribe div flex -->
       <div class="flex flex-row justify-between mt-[5rem]">
       <div class="w-[47.8rem] p-[1.5rem] bg-secondary rounded-[10px] text-basicColor">
        <header class="font-header text-xlg">ScribeTribe Africa </header>
        <p class="font-sm text-xsm mb-[1rem]">
          In 2017, Bright UK founded ScribeTribe Africa,
           a digital media company providing full publishing services 
           that help subject matter experts and thought leaders to reinforce their 
           authority, promote their brands and drive movements through publication and 
           distribution of books and other digital products. 
        </p>
        <button class="w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px]">Visit our website</button>
       </div>

       <div class="w-[47.8rem] h-[17.7rem]">
        <img :src="Scribe" class="w-full h-full rounded-[10px]" alt="bright"/>
       </div>
      </div>

      <!-- sixth sense div -->
      <div class="flex flex-row justify-between mt-[5rem]">
      <div class="w-[47.7rem] min-h-[31.5rem]">
        <img :src="SixthSense" class="w-full min-h-full rounded-[10px]" alt="bright"/>
       </div>

        <div class="w-[47.8rem] p-[1.5rem] bg-secondary rounded-[10px] text-basicColor">
         <header class="font-header text-xlg">SixthSense Leadership</header>
         <p class="font-sm text-xsm mb-[1rem]">
          Bright UK is the Principal Consultant at Sixth Sense Leadership Consulting, an innovative company he 
          founded to help forward-thinking individuals
           and organizations to lead the future by catalysing their reinvention and exponential growth through 
           strategy, training, and consulting. 
          Together, the company’s faculty have designed and facilitated training programmes for at least one of the top 
          three brands in every sector of the nation’s economy including telecommunications, banking and finance, technology, oil and gas, food and agriculture, manufacturing, etc. 
         </p>
         <button class="w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px]">Visit our website</button>
        </div>
       </div>

        <!-- africahmp div flex -->
        <div class="flex flex-row justify-between my-[5rem]">
          <div class="w-[47.8rem] p-[1.5rem] bg-secondary rounded-[10px] text-basicColor">
           <header class="font-header text-xlg">Africhamps Network</header>
           <p class="font-sm text-xsm mb-[1rem]">
            Bright UK is the Executive Director of Africhamps Network, 
            a non-profit raising disruptive innovators and transformational 
            leaders to stir the repositioning of Africa from third- to first-world. 
           </p>
           <button class="w-[20.4rem] h-[4.3rem] bg-primary text-secondary font-sm text-xsm rounded-[8px]">Visit our website</button>
          </div>
   
          <div class="w-[47.8rem] h-[17.7rem]">
           <img :src="Africhamp" class="w-full h-full rounded-[10px]" alt="bright"/>
          </div>
         </div>
     
     </Container>
    <Footer />  
    </main>
</template>

<style scoped>
.aboutBanner::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

</style>