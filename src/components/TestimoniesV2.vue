<script setup>

import Niyi from "@/assets/niyi.png";
import CommentIcon1 from "@/assets/commentIcon1.svg";
import Subheading from "@/components/SubHeading.vue";
import Heading from "@/components/Heading.vue";

import {useTestimoniesStore} from "@/store/testimonies.store.js";
import {onBeforeMount, watch, ref} from "vue";
import Container from "@/components/Container.vue";
import TestimonyQuotes from "@/components/TestimonyQuotes.vue";

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

      <h2
          class="font-bold text-header max-sm:text-[3.0rem] text-secondary leading-[4.2rem] mb-[2.6rem]"
      >
        What People are Saying
      </h2>
      <div
          class="grid grid-cols-[repeat(auto-fill,minmax(33.7rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full gap-[2.4rem]"
      >
        <TestimonyQuotes
            v-for="(item, index) in store.testimonies"
            :key="index"
            :image="item.image"
            :name="item.name"
            :quote="item.quote"
            :position="item.position"
            :company="item.company"
        />
      </div>

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
