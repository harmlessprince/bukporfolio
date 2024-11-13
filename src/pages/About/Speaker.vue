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
import aboutSpeaker from '@/assets/about_speaker.png';


const items = ref([...Array(100).keys()].map(i => ({id: i, name: `Item ${i + 1}`}))); // Example items
const paginatedItems = ref([]);

const pageSize = 10; // Number of items per page

function loadMore() {
  const start = currentPage.value * pageSize;
  const end = start + pageSize;
  paginatedItems.value.push(...items.value.slice(start, end));
  currentPage.value++;
  console.log(currentPage.value)
}

gsap.registerPlugin(ScrollTrigger);
const store = useQuoteStore()


const currentPage = ref(0);
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
  loadMore()
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
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1731492454/1280_by_631_v1px_pjygvk.jpg"
        page="Speaker"
    />
    <section class="mb-[4.4rem]">
      <Container>
        <div class="w-full flex max-sm:flex-col items-start mt-[5rem]">
          <div
              class="w-[47.6rem]  max-sm:w-full min-h-[57.7rem] min-small:max-h-[41.7rem] rounded-[10px] bookBrightImage mr-[5rem] max-sm:mr-0 overflow-hidden">
            <img
                src="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1730706744/speaker_image_1_ya01iy.png"
                class="w-full h-full rounded-[10px]" alt="bright"/>
          </div>
          <div class="w-[64.1rem]  max-small:w-full bookBrightText">
            <div
                class="max-small:mt-[2.4rem] font-[500] text-[1.6rem] max-small:text-[1.4rem] text-[#2B2B2B] mb-[2rem] space-y-[1.6rem] leading-[24px] max-small:leading-[20px]">
              <div class="max-medium:space-y-[1.6rem] space-y-[1.6rem] font-normal text-basic ">
                <p>
                  Bright UK is the voice of the next generation and a trusted guide for future-ready leaders.
                </p>
                <p>
                  Often described as an old sage in a young body, 
                  he captivates audiences with mind-shifting insights that command the attention of even the wisest leaders.
                </p>
                <p>As a sought-after keynote speaker, Bright brings expertise across essential areas that influence 
                  behaviour and drive positive change. From Leadership and Personal Development to Business, Career Advancement,
                   and National Development, his speeches are crafted to elevate the human
                  condition, empower individuals, raise sound leaders, shape culture, and democratize prosperity.
                </p>
                <p>
                  Bright has an exceptional gift for extracting wisdom from everyday life, 
                  weaving them into actionable frameworks and contemporary stories that resonate with diverse audiences. 
                  His clear, relatable communication style appeals to both seasoned professionals and aspiring leaders alike.
                   He has been featured on prominent media platforms, 
                  inspiring a range of audiences—from entrepreneurs and business leaders to faith-based communities and academicians.
                </p>
                <p>
                  With a growing demand for his engaging presentations, 
                  Bright UK speaks regularly at conferences, seminars, 
                  and workshops across the country, leaving a lasting impact wherever he speaks.
                </p>
              </div>
            </div>
            <RouterLink
                :to="{name: 'contact', query: {service: 'speaker'}}">
              <button
                  class="hover:scale-[1.1] font-[500] max-small:font-[400] text-[1.6rem] max-small:text-[1.4rem] text-secondary w-[20.4rem] max-small:w-full h-[5rem] max-small:h-[4.3rem] bg-primary rounded-[8px] flex justify-center items-center"
              >Book Bright UK
              </button>
            </RouterLink>
          </div>
        </div>
      </Container>
    </section>


    <!-- inspiration words from bright -->
    <section class="w-full bg-[#F1F1F1] py-top mt-[1rem] mb-[4.4rem]">
      <Container>
        <div class="w-full text-center mt-[2rem]">
          <!-- <Subheading title="Quotes"/> -->
          <Heading title="Inspirational Words From Bright UK"/>
        </div>

        <div
            class="scrollBox grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem] max-medium:gap-[1.5rem] mt-[2rem]"
        >

          <InspirationCard
              v-for="(item, index) in paginatedQuotes"
              :title="item.title"
              :quote="item.quote"
              :img="item.image"
              :key="index"
              :ind="index"
              :style="{ transitionDelay: `${index * 100}ms` }"
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
.list-container {
  display: flex;
  flex-direction: column;
  color: red;
}

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

.list-item {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Animation timing */
}

.fade-enter, .fade-leave-to {
  opacity: 0; /* Fade out */
  transform: translateY(20px); /* Move down */
}

.fade-enter-active {
  opacity: 1;
  transform: translateY(0);
}
</style>