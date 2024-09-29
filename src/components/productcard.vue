<script setup>

const props = defineProps(['title', "url", "price", "description"])
</script>

<template>
 <div class="rounded-[10px] border border-[#BEBEBE] p-[1rem] text-left mb-[2rem] flex flex-col justify-between h-full">
    <img :src="url" class="w-[100%] h-[247px] relative" alt="book" />
    <header class="text-secondary font-header text-basic mt-[0.5rem]">{{props.title}}</header>
   <div class="text-regular font-xsm text-xsm">
     <p >
       {{props.description}}
     </p>
   </div>
   <div class="flex flex-col justify-between">
     <div class="text-xlg text-[#21211E] font-header">#{{new Intl.NumberFormat().format(props.price)}}</div>
     <div class="flex flex-row justify-between mt-[0.5rem]">
       <button class="w-[13.7rem]  h-[4.3rem] bg-primary border border-primary text-secondary text-xsm font-sm rounded-[8px]">Add to Cart</button>
       <button class="w-[13.7rem]  h-[4.3rem] bg-transparent border border-primary text-secondary text-xsm font-sm rounded-[8px]">View more</button>
     </div>
   </div>
 </div>
</template>

<style scoped>
</style>