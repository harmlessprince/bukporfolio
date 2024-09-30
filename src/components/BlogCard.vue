<script setup>
import Person from '@/assets/person.svg';
import {generateThumbnailFromText} from "@/services/util.js";

const props = defineProps(['title', 'year', 'day', 'month', 'author', "url", "categories", "id"])

</script>

<template>
  <div class="rounded-[10px] border border-[#BEBEBE] text-left mb-[2rem] h-full">
    <img :src=generateThumbnailFromText(props.title) class="w-[100%] h-[21.2rem] rounded-t-[10px]"
         alt="book"/>
    <div class="p-[1rem] flex flex-col justify-center gap-[1rem]">
      <div class="flex flex-row items-center">
        <div class="mr-[0.7rem] text-xlg text-center text-basicColor W-[6.6rem] bg-secondary px-[1.3rem]">
          <span class="font-xsm">{{ props.day }}/{{ props.year }}</span>
          <div class="bg-basicColor w-full h-[1px]"></div>
          <span class="font-header">{{ props.month }}</span>
        </div>
        <div class="flex flex-col items-start">
          <div class="font-xsm text-xsm text-[#7A7A7A] flex flex-row items-center">
            <img :src="Person" class="mr-1">
            <span>{{ props.author }}</span>
          </div>
          <div class="flex flex-row items-center space-x-[1rem] mt-1">
             <span class="font-bold" v-for="(category, index) in props.categories" :key="index">
            {{ category }}
            </span>
          </div>

        </div>
      </div>

      <h2 class="text-secondary font-header leading-[24.1px] text-xlg mt-[0.5rem]">{{ props.title }}</h2>
      <div class="text-regular font-xsm text-xsm">
        <RouterLink :to="{name: 'post', params: {id: props.id}}" class="flex items-center justify-center border-[1px] border-[#C7AE2E] h-[4.3rem] rounded-[8px] text-center text-[#000000] font-medium">
          Read
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog_image {

}
</style>