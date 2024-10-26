<script setup>
import Niyi from "@/assets/niyi.png";
import CommentIcon1 from "@/assets/commentIcon1.svg";
import Subheading from "@/components/SubHeading.vue";
import Heading from "@/components/Heading.vue";

import {useTestimoniesStore} from "@/store/testimonies.store.js";
import {onBeforeMount, watch, ref} from "vue";
import Container from "@/components/Container.vue";

const store = useTestimoniesStore()
const currentQuote = ref(null);
const currentIndex = ref(0);
const currentDirection = ref('forward');
watch(
    () => store.testimonies,
    (newTestimonies) => {
      if (newTestimonies.length > 0) {
        currentQuote.value = newTestimonies[currentIndex.value];
      }
    }
);
onBeforeMount(() => {
  store.getTestimonies();
});

function onQuoteChange(index) {
  currentIndex.value = index;
  currentQuote.value = store.testimonies[currentIndex.value];
}

function nextQuote() {
  if (currentIndex.value < store.testimonies.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Loop back to the first item
  }
  currentQuote.value = store.testimonies[currentIndex.value];
  currentDirection.value = 'forward';
}

function previousQuote() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = store.testimonies.length - 1; // Loop to the last item
  }
  currentQuote.value = store.testimonies[currentIndex.value];
  currentDirection.value = 'backward';
}
</script>

<template>
  <section class="grow-[2] shrink-0 basis-0">
    <Container>
      <h3
        class="font-lg text-basic text-primary font-primary leading-[2rem] mb-[0.7rem] max-sm:mb-0"
      >
        Testimony
      </h3>
      <h2
        class="font-header text-header max-sm:text-[3.0rem] text-secondary leading-[4.2rem] mb-[2.6rem]"
      >
        What People are Saying
      </h2>
      <!-- this part will be dynamic, we will work on it -->
      <div
        class="bg-[#F9F7EA] rounded-[10px] px-[2.2rem] py-[3.7rem] min-h-[25.4rem] flex flex-col gap-[2rem] justify-between"
        v-if="currentQuote"
      >
        <q
          class="font-sm text-secondary text-xlg max-small:text-sm italic mb-[1.7rem] leading-[3rem] overflow-clip"
        >
          {{ currentQuote.quote }}
        </q>

        <div class="flex flex-row justify-between items-end">
          <div class="flex flex-row">
            <img
              :src="currentQuote.image"
              class="w-[55px] h-[59px] mr-[1rem] rounded-full"
              alt="bright"
            />
            <span class="font-header text-xlg max-sm:text-sm text-secondary"
              >{{ currentQuote.name }}<br />
              <span class="font-sm text-[#838080] text-xsm"
                >{{
                    currentQuote.position ?? ''
                }}
                of {{ currentQuote.company ?? '' }}</span
              >
            </span>
          </div>
          <img
            :src="CommentIcon1"
            class="w-[24px] h-[18px] mr-[1rem]"
            alt="comment"
          />
        </div>
      </div>
      <div class="mt-[2rem] flex flex-row justify-between items-center">
        <div>
          <!-- using google material icon, cdn link is in the index page -->
          <span
            class="material-icons w-[26px] h-[27px] mr-[2rem]"
            :class="currentDirection === 'backward' ? 'text-[#151515]' : 'text-[#B5B5B5]'"
            @click="previousQuote"
            >arrow_back</span
          >
          <span
            class="material-icons w-[26px] h-[27px]"
            @click="nextQuote"
            :class="currentDirection === 'forward' ? 'text-[#151515]' : 'text-[#B5B5B5]'"
            >arrow_forward</span
          >
        </div>

        <div class="flex flex-row">
          <img
            :src="item.image"
            :alt="item.name"
            v-for="(item, index) in store.testimonies"
            :key="index"
            class="w-[4.2rem] h-[4.5rem] rounded-full space-x-1"
            :class="currentQuote?.id === item.id ? 'opacity-40': ''"
            @click="onQuoteChange(index)"
          />
        </div>
      </div>
      <!-- dynamic part of testimony ends here -->
    </Container>
  </section>
</template>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
.translate-x-full {
  transform: translateX(100%); /* Slide out to the right */
}
.-translate-x-full {
  transform: translateX(-100%); /* Slide out to the left */
}
.translate-x-0 {
  transform: translateX(0); /* Slide in */
}
</style>
