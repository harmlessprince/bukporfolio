<script setup>
import Qoutation from '@/assets/qoutationmark.svg';

const props = defineProps(['title', "qoute"])
</script>

<template>
 <div class="w-full min-h-[32.4rem] bg-basicColor rounded-[10px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0">
    <img :src="Qoutation" class="w-[4.2rem] h-[3.8rem] " alt="book" />
    <header class="text-[2.4rem] font-header text-secondary mt-[0.5rem]">{{props.title}}</header>
    <p class="text-regular font-xsm text-xsm">{{props.qoute}}</p>
 </div>
</template>

<style scoped>
</style>