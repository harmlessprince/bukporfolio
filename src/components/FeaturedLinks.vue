<script setup>
import {onBeforeMount, watch, ref} from "vue";
import Container from "@/components/Container.vue";
import {Carousel, Slide} from "vue3-carousel";
import UrlPreview from "@/components/UrlPreview.vue";
import TestimonyQuotes from "@/components/TestimonyQuotes.vue";

const settings = {
  itemsToShow: 3,
  snapAlign: 'start',
  wrapAround: true,
  pauseAutoplayOnHover: true,
  breakpoints: {
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
const features = [
  "https://www.youtube.com/watch?v=oJ4GeqfFC_s",
  "https://societynow.ng/things-to-know-as-lead-the-future-conference-holds-nov-22-to-23/",
  "https://punchng.com/nesg-chairman-others-for-lagos-leadership-conference/",
  "https://techeconomy.ng/bright-ukwenga-olaniyi-yusuf-others-to-empower-leaders-at-lead-the-future-conference/",
  "https://independent.ng/ukwenga-yusuf-others-champion-leadership-empowerment-at-lead-the-future-conference/",
  "https://brandcrunch.com.ng/2024/10/22/bright-ukwenga-olaniyi-yusuf-others-to-empower-leaders-at-lead-the-future-conference/",
  "https://guardian.ng/news/nigeria/metro/leadership-conference-to-hold-in-lagos/#:~:text=The%20inaugural%20edition%20of%20Lead,November%2022%20and%2023%2C%202024",
  "https://tribuneonlineng.com/bright-ukwenga-olaniyi-yusuf-others-to-empower-leaders-at-lead-the-future-conference/"
]

</script>

<template>
  <section class="grow-[2] shrink-0 basis-0">
    <Container>

      <h2
          class="font-bold text-header max-sm:text-[3.0rem] text-secondary leading-[4.2rem] mb-[2.6rem] text-center"
      >
        Featured On
      </h2>
      <Carousel v-bind="settings" :autoplay="1500">

        <Slide v-for="(item, index) in features" :key="index">
          <div
              class="grid grid-cols-[repeat(auto-fill,minmax(33.7rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(30.8rem,1fr))] w-full  md:mr-[20px]">

            <UrlPreview
                :url="item"
            />
          </div>

        </Slide>

        <template #addons>
          <!--            <Navigation />-->
        </template>
      </Carousel>
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
