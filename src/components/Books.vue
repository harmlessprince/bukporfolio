<script setup>

import Subheading from "@/components/subheading.vue";
import Heading from "@/components/heading.vue";
import ProductCard from "@/components/productcard.vue";

import {useBookstore} from "@/store/books.store.js";
import {onBeforeMount} from "vue";

const store = useBookstore()
onBeforeMount(() => {
  store.getBooks();
});
</script>

<template>
  <section class="text-center px-sides pt-[3rem] bg-white">
    <Subheading title="Books"/>
    <Heading title="Personal Development Products"/>
    <div class="grid grid-cols-3 grid-flow-row gap-1 mt-[2rem]">
      <ProductCard
          :title="book.title"
          :description="book.summary"
          :price="book.default.price"
          :url="book.image ?? 'https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png'"
          v-for="(book, index) in store.books" :key="index"
      />
    </div>
  </section>
</template>

<style scoped>

</style>