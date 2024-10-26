<script setup>
import Container from "@/components/Container.vue";
import { onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Brands from "@/components/Brands.vue";
import Heading from '@/components/Heading.vue';
import HeroSection from "@/components/HeroSection.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(".bookBrightImage",
      {x: -100},
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bookBrightImage",
          start: 'top 90%'
        },
      });

  gsap.fromTo(".bookBrightText",
      {x: 100},
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bookBrightText",
          start: 'top 90%'
        },
      });

  gsap.fromTo(".coachBrightImage",
      {y: 100},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".coachBrightImage",
          start: 'top 90%'
        },
      });

  gsap.fromTo(".coachBrightText",
      {y: 100},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".coachBrightText",
          start: 'top 100%'
        },
      });
})

</script>

<template>
  <main class="text-primary overflow-x-none">
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerbanner_ljje9a.png"
        page="Trainer"
    />

    <Container>
      <div
          class="w-full min-h-full flex max-medium:flex-col max-medium:gap-y-[2rem] items-center my-[5rem] max-medium:my-[2.7rem]">
        <div
            class="bookBrightImage w-[47.6rem] max-medium:w-full min-h-[62.8rem] max-medium:min-h-full rounded-[10px] relative mr-[5rem] max-medium:mr-0">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059221/who_i_am_jfd3xn.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059218/ukLogo_eavpu6.svg"
               class="w-[7.5rem] h-[7.5rem] mx-auto absolute top-[-0.5rem] right-[0.5rem]"
               alt="footer logo"/>
          </div>
       
        <div class="w-[47.7rem] max-medium:w-full bookBrightText">
          <Heading title="Trainer" class="mb-2"/>
          <div class="font-normal text-basic text-[#2B2B2B] mb-[2rem] leading-[2rem] text-justify space-y-2">
            <p>
              Bright UK is the Principal Consultant at Sixth Sense Leadership Consulting, an innovative company
              helping
              individuals and organizations to lead the future by catalysing their reinvention and exponential growth
              through strategy, training, and consulting.
            </p>
            <p>
              He is certified by the International Council of Management Consulting Institutes (ICMCI). He is also a
              Fellow of the Institute of Management Consultants of Nigeria and a member of the Chartered Institute of
              Directors. An alumnus of the National Institute of Policy and Strategic Studies, Kuru, he holds a
              certificate in Policy, Strategy, and Leadership from the nation’s foremost policy think tank.
            </p>
            <p>
              As a Professional Coach and Trainer, Bright works with C-suite executives and ambitious professionals to
              bridge the gap between their potential and performance towards achieving high productivity as well as
              establishing thought leadership in their space.
            </p>
            <p>He is adept at identifying knowledge and soft skills gaps as well as designing and delivering highly
              engaging training and retreats, and his first-rate Corporate Training expertise has been utilized by local
              organizations and multinationals, including FrieslandCampina WAMPCO Nigeria Plc, Nigerian National
              Petroleum Corporation (NNPC), Guaranty Trust Bank
              (GTB), First Bank Insurance Brokers, Nigerian Institute of Town Planners (NITP), etc. to boost the
              effectiveness and productivity of their workforce.
            </p>
          </div>

          <RouterLink
              class="hover:scale-[1.1] font-sm text-xsm text-secondary w-[20.4rem] h-[4.3rem] bg-primary rounded-[8px] flex justify-center items-center"
              :to="{name: 'contact', query: {service: 'personalTrainingCoachingSession' }}">
            Book bright UK
          </RouterLink>
        </div>
      </div>
    </Container>

    <Brands/>

    <Container id="#coach">
      <div
          class="grid grid-cols-2 max-medium:grid-cols-1 max-medium:gap-y-[2rem] gap-x-[2rem] items-end my-[5rem] max-medium:my-[2.7rem]">
        <div
            class="coachBrightImage w-[48.0rem] max-medium:w-full min-h-[43.3rem] max-medium:min-h-[27.8rem] medium:hidden">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059217/trainerprofile_nkw9rp.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-full coachBrightText">
          <Heading title="Coach"/>
          <div class="font-normal text-basic text-[#2B2B2B] mb-[0.5rem] text-justify space-y-2">
            <p>
              In today's broken world, many individuals struggle with psychological issues that hinder their progress in
              leadership, wealth-building, and relationships, and impact their overall well-being as they find
              themselves trapped in patterns of negative thinking, self-sabotage, and limiting beliefs.
            </p>
            <p>
              As a Transformation Coach, Bright UK helps individuals to close the gap between their potential and
              performance through bespoke mind engineering processes that helps them achieve healing and wholeness,
              regain control of their lives, lead effectively, and ultimately attain wealth and well-being.
            </p>
            <p>
              Whether to reinvent yourself, develop new habits, meet your wildly ambitious goals, or lead more
              effectively, Bright UK will hold your hands and walk you through where you are to where you ought to be.
            </p>

          </div>
          <div>
            <RouterLink
                class="hover:scale-y-[1.1] h-[4.3rem] w-full rounded-[8px] bg-primary font-sm text-xsm text-secondary flex justify-center items-center mb-5"
                :to="{name: 'contact', query: {service: 'personalTrainingCoachingSession' }}">
              Personal Coaching Session
            </RouterLink>

            <RouterLink
                class="hover:scale-y-[1.1] h-[4.3rem] w-full rounded-[8px] border border-primary font-sm text-xsm flex justify-center items-center mb-5"
                :to="{name: 'contact', query: {service: 'groupTrainingCoachingSession' }}">
              Register your team for a Group Coaching Session
            </RouterLink>
          </div>
        </div>
        <div class="w-full max-medium:hidden coachBrightImage">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerImage2_rz0aer.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
      </div>
    </Container>
  </main>
</template>

<style scoped>
.aboutBanner::after {
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