<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/trainerprofile.png';
import Brands from "@/components/Brands.vue";
import Heading from '@/components/Heading.vue';
import UkLogo from '@/assets/ukLogo.svg';
import Coach from '@/assets/trainerImage2.png';

</script>

<template>
  <main class="text-primary">
    <Navigation/>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative  h-[50rem] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] max-sm:w-full text-basic mx-auto text-center">
        <h1 class="text-forty font-xlg text-basicColor">TRAINER</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
     </section>

     <Container>
      <div class="w-full flex max-sm:flex-col max-sm:gap-y-[2rem] justify-between items-center my-[5rem] max-sm:my-[2.7rem]">
      <div class="w-[47.6rem] max-sm:w-full min-h-[62.8rem] max-sm:min-h-[34.7rem] rounded-[10px] relative">
        <img :src="WhoIam" class="w-full h-full rounded-[10px]" alt="bright"/>
        <img :src="UkLogo" class="w-[7.5rem] h-[7.5rem] mx-auto absolute top-[-0.5rem] right-[0.5rem]" alt="footer logo" />
      </div>
      <div class="w-[47.7rem] max-sm:w-full">
        <p class="font-xsm text-basicText text-[#2B2B2B] mb-[2rem] leading-[2rem]">
            Bright UK is the Principal Consultant at Sixth Sense Leadership Consulting, an innovative company helping individuals and organizations to lead the future by catalysing their reinvention and exponential growth through strategy, training, and consulting. 
            He is certified by the International Council of Management Consulting Institutes (ICMCI). He is also a Fellow of the Institute of Management Consultants of Nigeria and a member of the Chartered Institute of Directors. An alumnus of the National Institute of Policy and Strategic Studies, Kuru, he holds a certificate in Policy, Strategy, and Leadership from the nation’s foremost policy think tank. 
            As a Professional Coach and Trainer, Bright works with C-suite executives and ambitious professionals to bridge the gap between their potential and performance towards achieving high productivity as well as establishing thought leadership in their space. 
            He is adept at identifying knowledge and soft skills gaps as well as designing and delivering highly engaging training and retreats, and his first-rate Corporate Training expertise has been utilized by local organizations and multinationals, including 
            FrieslandCampina WAMPCO Nigeria Plc, Nigerian National Petroleum Corporation (NNPC), Guaranty Trust Bank (GTB), First Bank Insurance Brokers, Nigerian Institute of Town Planners (NITP), etc. to boost the effectiveness and productivity of their workforce. 
        </p>

        <button class="font-sm text-xsm text-secondary w-[20.4rem] h-[4.3rem] bg-primary rounded-[8px]">Book bright UK</button>
      </div>
    </div>
     </Container>

     <Brands />

     <Container id="#coach">
        <div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[2rem] gap-x-[2rem] items-end my-[5rem] max-sm:my-[2.7rem]">
          <div class="w-[48.0rem] max-sm:w-full min-h-[43.3rem] max-sm:min-h-[27.8rem] sm:hidden">
            <img :src="Coach" class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-[47.9rem] max-sm:w-full">
            <Heading title="Coach" />
            <p class="font-xsm text-basic text-[#2B2B2B] mb-[0.5rem]">
                In today's broken world, many individuals struggle with psychological issues that hinder their progress in leadership, wealth-building, and relationships, and impact their overall well-being as they find themselves trapped in patterns of negative thinking, self-sabotage, and limiting beliefs. 
                As a Transformation Coach, Bright UK helps individuals to close the gap between their potential and performance through bespoke mind engineering processes that helps them achieve healing and wholeness, regain control of their lives, lead effectively, and ultimately attain wealth and well-being. 
                Whether to reinvent yourself, develop new habits, meet your wildly ambitious goals, or lead more effectively, Bright UK will hold your hands and walk you through where you are to where you ought to be. 
            </p>

            <div>
            <button class="block h-[4.3rem] w-full rounded-[8px] bg-primary font-sm text-xsm text-secondary"> Book a Personal Coaching Session</button>
            <br/>
            <button class="block h-[4.3rem] w-full rounded-[8px] border border-primary font-sm text-xsm">Register your team for a Group Coaching Session</button>
            </div>

        </div>
        <div class="w-[48.0rem] min-h-[43.3rem] max-sm:hidden">
            <img :src="Coach" class="w-full h-full rounded-[10px]" alt="bright"/>
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