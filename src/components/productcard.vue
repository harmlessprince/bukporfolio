<script setup>
import Bright1 from '@/assets/bright1.png';

const props = defineProps(['title', "url", "price", "description"])
</script>

<template>
 <div class="rounded-[10px] border border-[#BEBEBE] p-[1rem] text-left mb-[2rem]">
    <img :src="url" class="w-[100%] h-[247px] relative" alt="book" />
    <header class="text-secondary font-header text-basic mt-[0.5rem]">{{props.title}}</header>
    <p class="text-regular font-xsm text-xsm">{{props.description}}</p>
    <div class="text-xlg text-[#21211E] font-header">#{{new Intl.NumberFormat().format(props.price)}}</div>
    <div class="flex flex-row justify-between mt-[0.5rem]">
        <button class="py-[0.5rem] bg-primary border border-primary text-secondary text-xsm font-sm rounded-[8px]">Add to Cart</button>
        <button class="py-[0.5rem] bg-transparent border border-primary text-secondary text-xsm font-sm rounded-[8px]">View more</button>
    </div>
 </div>
</template>

<style scoped>
</style>