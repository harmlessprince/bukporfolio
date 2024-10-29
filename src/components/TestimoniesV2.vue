<script setup>
import {useTestimoniesStore} from "@/store/testimonies.store.js";
import {onBeforeMount, watch, ref} from "vue";
import Container from "@/components/Container.vue";
import TestimonyQuotes from "@/components/TestimonyQuotes.vue";
import {Carousel, Slide} from "vue3-carousel";

const store = useTestimoniesStore()
const currentQuote = ref(null);
const currentIndex = ref(0);
const currentDirection = ref('forward');
const settings = {
  itemsToShow: 3,
  snapAlign: 'start',
  wrapAround: true,
  pauseAutoplayOnHover: true,
  breakpoints :{
    // 700px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    700: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  }
}
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

// function onQuoteChange(index) {
//   currentIndex.value = index;
//   currentQuote.value = store.testimonies[currentIndex.value];
// }

// function nextQuote() {
//   if (currentIndex.value < store.testimonies.length - 1) {
//     currentIndex.value++;
//   } else {
//     currentIndex.value = 0; // Loop back to the first item
//   }
//   currentQuote.value = store.testimonies[currentIndex.value];
//   currentDirection.value = 'forward';
// }

// function previousQuote() {
//   if (currentIndex.value > 0) {
//     currentIndex.value--;
//   } else {
//     currentIndex.value = store.testimonies.length - 1; // Loop to the last item
//   }
//   currentQuote.value = store.testimonies[currentIndex.value];
//   currentDirection.value = 'backward';
// }
</script>

<template>
  <section class="grow-[2] shrink-0 basis-0">
    <Container>

      <h2
          class="font-bold text-header max-sm:text-[3.0rem] text-secondary leading-[4.2rem] mb-[2.6rem] text-center"
      >
        What People are Saying
      </h2>
      <div

      >
        <Carousel v-bind="settings"  :autoplay="1500" >

          <Slide  v-for="(item, index) in store.testimonies" :key="index" >
            <div class="grid grid-cols-[repeat(auto-fill,minmax(33.7rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full  md:mr-[20px]">
              <TestimonyQuotes
                  :key="index"
                  :image="item.image"
                  :name="item.name"
                  :quote="item.quote"
                  :position="item.position"
                  :company="item.company"
              />
            </div>

          </Slide>

          <template #addons>
            <!--            <Navigation />-->
          </template>
        </Carousel>
<!--        <TestimonyQuotes-->
<!--            v-for="(item, index) in store.testimonies"-->
<!--            :key="index"-->
<!--            :image="item.image"-->
<!--            :name="item.name"-->
<!--            :quote="item.quote"-->
<!--            :position="item.position"-->
<!--            :company="item.company"-->
<!--        />-->
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

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
