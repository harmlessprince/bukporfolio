<script setup>

import Container from "@/components/Container.vue";
import notFound from "@/assets/notFound.png"

defineProps({
  message: {
    type: String,
    required: false,
    default: 'Oops! Page Not Found',
  },
  reason: {
    type: String,
    required: false,
    default: 'It seems the page you’re looking for doesn’t exist.',
  },
  route: {
    type: String,
    required: false,
    default: 'home',
  },
  buttonText:{
    type: String,
    required: false,
    default: 'Go Back Home',
  }
})
</script>

<template>
  <div class="flex justify-center items-center mt-[20rem] flex-col">
    <img :src="notFound" class="mb-[3rem]"/>
    <slot>
      <div class="flex items-center justify-center flex-col">
        <div>
          <h2 class="font-bold text-[4.8rem] text-secondary mb-[1.5rem]">
            {{ message }}
          </h2>
          <p class="text-[2.4rem] text-secondary mb-[1.5rem]">{{ reason }}</p>
        </div>

        <RouterLink :to="{name: route}"
                    class="hover:scale-[1.1] flex items-center justify-center text-secondary bg-primary w-[22.5rem] h-[5.5rem] rounded-[8px] place-self-center text-[1.4rem] font-medium">
         {{buttonText}}
        </RouterLink>
      </div>

    </slot>
  </div>
</template>

<style scoped>

</style>