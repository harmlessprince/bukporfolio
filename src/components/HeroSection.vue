<script setup>
import { useRouter, useRoute } from 'vue-router';
import {onMounted, ref} from "vue";
import {getPreviousRoute} from "@/router/index.js";
const props = defineProps({
  imageUrl: String,
  page: String,
  text: {
    type: String,
    required: false,
  },
})

const route = useRoute();
const currentPath = ref(route.name); // Get the current path
const previousPath = ref(null);

onMounted(() => {
  // Fetch the previous route once component is mounted
  previousPath.value = getPreviousRoute();
});

</script>

<template>
  <section class="flex items-center justify-center relative h-[55rem] w-full bg-cover bg-no-repeat"
           :style="{ 'background-image': `url(${imageUrl})` }">
    <div class="w-[47.7rem] text-basic mx-auto text-center">
      <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">{{ page }}</h1>
      <div class="font-lg text-basic capitalize">
        <span class="text-bannerNavColor">{{previousPath}}</span>
        <slot>
          <span class="text-primary"> > {{currentPath }}</span>  <span class="text-primary" v-if="text"> > {{text }}</span>
        </slot>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>