<script setup>
// const props = defineProps(['images']);

import {ref} from "vue";

const images = ref([
  'https://res.cloudinary.com/chiaka/image/upload/v1727719532/dynamic_fq4frf.webp',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://res.cloudinary.com/chiaka/image/upload/v1693628177/dwccca46gldtawppuafl.png',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://res.cloudinary.com/chiaka/image/upload/v1727719532/dynamic_fq4frf.webp',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
])
const items = [
  {
    title: 'First',
    description: 'The first item.',
  },
  {
    title: 'Second',
    description: 'The second item.',
  },
]
</script>

<template>
  <div>
    <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="16">
      <template #default="{ item, index }">
        <div :style="{ height: `${(index + 1) * 100}px` }">
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<style scoped>
</style>