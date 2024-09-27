<script setup>

import Subheading from "@/components/subheading.vue";
import Heading from "@/components/heading.vue";
import ProductCard from "@/components/productcard.vue";

import {useBookstore} from "@/store/books.store.js";
import {onBeforeMount} from "vue";
import Container from "@/components/Container.vue";

const store = useBookstore()
onBeforeMount(() => {
  store.getBooks();
});
</script>

<template>
  <section class=''>
    <Container>
      <div class="text-center pt-[3rem]">
        <Subheading title="Books"/>
        <Heading title="Personal Development Products"/>
        <div class="grid grid-flow-row gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-sm w-full">
          <ProductCard
              :title="book.title"
              :description="book.summary"
              :price="book.default.price"
              :url="book.image ?? 'https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png'"
              v-for="(book, index) in store.books" :key="index"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>

</style>