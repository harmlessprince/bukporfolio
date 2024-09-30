<script setup>
import Bright1 from '@/assets/bright1.png';
const props = defineProps(['title','day', 'month', 'author', "url", "category", "description"])
</script>

<template>
 <div class="rounded-[10px] border border-[#BEBEBE] text-left mb-[2rem] h-full w-[31.1rem]">
    <img :src="url" class="w-[100%] h-[21.2rem] rounded-t-[10px]" alt="book" />
    <div class="p-[1rem]">
    <div class="flex flex-row items-center">
        <div class="mr-[0.7rem] text-xlg text-center text-basicColor W-[6.6rem] bg-secondary px-[1.3rem]">
            <span class="font-xsm">{{props.day}}</span>
            <div class="bg-basicColor w-full h-[1px]"></div>
            <span class="font-header">{{props.month}}</span>
        </div>

        <div>
            <div class="font-xsm text-xsm text-[#7A7A7A]">
                <span>{{props.author}}</span>
            </div>
            <button class="w-[16.3rem] h-[2.1rem] rounded-[10px] text-basicColor bg-[#0a9c3b]">{{props.category}}</button>
        </div>

    </div>
    <header class="text-secondary font-header leading-[24.1px] text-xlg mt-[0.5rem]">{{props.title}}</header>
   <div class="text-regular font-xsm text-xsm">
     <p >
       {{props.description}}
     </p>
   </div>
</div>
 </div>
</template>

<style scoped>
</style>