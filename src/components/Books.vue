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
      <div class="text-center pt-[3rem] ">
        <Subheading title="Books"/>
        <Heading title="Personal Development Products"/>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem]">
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