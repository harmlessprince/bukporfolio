<script setup>
import {onMounted} from 'vue'
import HeroSection from "@/components/HeroSection.vue";
import Heading from '@/components/Heading.vue';
import Container from "@/components/Container.vue";
import Events from "@/components/Events.vue";
import EventImage from "@/assets/events.png"
import {ref} from "vue";

const arrayOfEvents = [{
  bannerUrl: "https://res.cloudinary.com/dcr1pvlh3/image/upload/v1731663698/WhatsApp_Image_2024-11-12_at_08.01.11_e13e5318_1_kfvu6s.png",
  theme: "Lead The future Conference 2024",
  eventUrl: "https://weleadthefuture.com/",
  notes: `
  <p>Sustainable success now belongs to those who master the game of readiness and strategically position themselves to lead the future.</p>
<p>At the <strong>LEAD THE FUTURE CONFERENCE</strong>, we will explore the strategies for leaders to position themselves and their organization for future success by building a culture of envisioning and adopting to changes within their industry.</p>
  `
},
]
</script>

<template>
  <main class="">
    <!-- about hero section -->
    <!-- :imageUrl="EventImage" -->
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1731492454/1280_by_631_v1px_pjygvk.jpg"
        page="Events"
    />

    <Container>
      <div class="text-center mt-[7.7rem]">
        <Heading title="Upcoming Events"/>
      </div>
      <div
          class="mt-[1.6rem] grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem]"
      >
        <Events
            v-for="(event, index) in arrayOfEvents" :key="index"
            :bannerUrl="event.bannerUrl"
            :theme="event.theme"
            :notes="event.notes"
            :eventUrl="event.eventUrl"
        />
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