<script setup>
import SkeletonLoderImage from './SkeletonLoderImage.vue';
import HeadingSkeleton from './HeadingSkeleton.vue';
import Container from "@/components/Container.vue";
import BookSkeletonLoader from './BookSkeletonLoader.vue';
</script>

<template>
    <div role="status" class="animate-pulse h-full w-full mt-[9rem]">
        <div class="w-full h-[50vh] mb-[3rem]">
            <SkeletonLoderImage />
        </div>
        <Container>
        <div class="mb-[3rem]">
       <HeadingSkeleton />
        </div>

         <div
        class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem]"
      >
        <BookSkeletonLoader v-for="n in 3" :key="n" />
        </div>
    </Container> 
    </div>
</template>

<style scoped>

</style>