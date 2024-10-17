<script setup>
import {computed, onMounted, ref} from 'vue'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import InspirationCard from '@/components/InspirationCard.vue';
import {useQuoteStore} from "@/store/quotes.store.js";
import {onBeforeMount} from "vue";
import HeroSection from "@/components/HeroSection.vue";
import Pagination from "@/components/Pagination.vue";

gsap.registerPlugin(ScrollTrigger);
const store = useQuoteStore()


const currentPage = ref(1);
const perPage = 6;
const paginatedQuotes = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return store.quotes.slice(start, end);
})

function updatePage(page) {
  currentPage.value = page;
}

onBeforeMount(() => {
  store.getQuotes();
});

onMounted(() => {
  // InspirationCards animation
  gsap.fromTo(".scrollBox",
      {y: 150},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".scrollBox",
          start: 'top 90%'
        },
      });

  gsap.fromTo(".bookBrightImage",
      {x: -400},
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bookBrightImage",
          start: 'top 60%'
        },
      });

  gsap.fromTo(".bookBrightText",
      {y: 300},
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bookBrightText",
          start: 'top 100%'
        },
      });
})
</script>

<template>
  <main class="text-primary">
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059210/aboutbanner_wcwdup.png"
        page="Speaker"
    />

    <Container>
      <div class="w-full flex  max-sm:flex-col items-center mt-[5rem]">
        <div class="w-[47.6rem]  max-sm:w-full h-[47.9rem] rounded-[10px] bookBrightImage mr-[5rem] max-sm:mr-0">
          <img src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059217/trainerprofile_nkw9rp.png"
               class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-[47.7rem]  max-sm:w-full bookBrightText">
          <p class="font-xsm text-basic text-[#2B2B2B] mb-[2rem]">
            Bright UK has often been described as an old sage is a young body. As such, when he speaks, wise leaders pay
            keen attention. 
            As a frequent keynote speaker, Bright UK’s speaking expertise cuts across subjects that impact on behaviour
            in order to elevate the human condition, empower individuals, raise sound leaders, shape culture, and
            democratize prosperity. These include Leadership, Personal Development, Business, Career Advancement, and
            National Development. 
            His uncanny ability to extract wisdom from life, weave them into comprehensible frameworks and contemporary
            stories, and distill them in simple language endears him to both old and young, established veterans and
            upwardly mobile professionals alike. 
            He has been featured on notable media platforms and has spoken to diverse audiences including entrepreneurs
            and business leaders, faith-based organizations, academicians, etc. 
            He is in demand at conferences, seminars, and workshops across the nation. 
          </p>

          <RouterLink
              :to="{name: 'contact', query: {service: 'speaker'}}">
            <button
                class="hover:scale-[1.1] font-sm text-xsm text-secondary w-[20.4rem] h-[4.3rem] bg-primary rounded-[8px] flex justify-center items-center"
            >Book bright UK
            </button>
          </RouterLink>
        </div>
      </div>
    </Container>

    <!-- inspiration words from bright -->
    <section class="w-full bg-[#F1F1F1] py-top mt-[1rem] mb-[6rem]">
      <Container>
        <div class="w-full text-center mt-[2rem]">
          <Subheading title="Quotes"/>
          <Heading title="Inspirational words from Bright UK"/>
        </div>
        <div
            class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
        >
          <InspirationCard
              v-for="(item, index) in paginatedQuotes"
              :title="item.title"
              :quote="item.quote"
              :key="index"
          />
        </div>
        <Pagination
            :currentPage="currentPage"
            :totalItems="store.quotes.length"
            :perPage="perPage"
            @updatePage="updatePage"
        />

      </Container>
    </section>
  </main>
</template>

<style scoped>
.speakerBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
}

.scroller {
  height: 100%;
}

</style>