<script setup>
import SkeletonLoderImage from './SkeletonLoderImage.vue';
</script>

<template>
    <div role="status" class="animate-pulse h-full w-full">
        <div class="w-full h-[247px] mb-3">
            <SkeletonLoderImage />
        </div>
        <div role="status" class=" animate-pulse">
            <div  v-for="n in 3" :key="n" class="h-3.5 bg-gray-200 rounded-full w-full mb-4"></div>
            <div  v-for="n in 3" :key="n" class="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>

            <div class="flex gap-[1rem]">
                <div  v-for="n in 2" :key="n" class=" min-w-[13.7rem] h-[4.5] bg-gray-200 rounded-full w-full mb-4"></div>
            </div>
          </div>
   
    </div>
</template>

<style scoped>

</style>