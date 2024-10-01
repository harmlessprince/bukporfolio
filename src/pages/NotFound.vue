<script setup>

import Container from "@/components/Container.vue";
import notFound from "@/assets/notFound.png"
</script>

<template>
    <div class="flex justify-center items-center mt-[20rem] flex-col">
      <img :src="notFound"  class="mb-[3rem]"/>
      <slot>
        <div class="flex items-center justify-center flex-col">
          <div>
            <h2 class="font-bold text-[4.8rem] text-secondary mb-[1.5rem]">
              Oops! Page Not Found
            </h2>
            <p class="text-[2.4rem] text-secondary mb-[1.5rem]">It seems the page you’re looking for doesn’t exist.</p>
          </div>

          <RouterLink to="/" class="flex items-center justify-center text-secondary bg-primary w-[22.5rem] h-[5.5rem] rounded-[8px] place-self-center text-[1.4rem] font-medium">Go Back Home</RouterLink>
        </div>

      </slot>
    </div>
</template>

<style scoped>

</style>