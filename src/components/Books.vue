<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {useBookstore} from "@/store/books.store.js";
import {onBeforeMount} from "vue";
import Container from "@/components/Container.vue";

const store = useBookstore()
onBeforeMount(() => {
  store.getBooks();
});
</script>

<template>
  <section class="">
    <Container>
      <div class="text-center">
        <!-- <h3 class="font-lg text-basic text-primary font-primary mb-[1.3rem] max-medium:mb-0">Books</h3> -->
        <h2 class="font-header text-[3.2rem] max-medium:text-[3.0rem] text-[#000000] leading-[4.2rem] mb-[4rem]">
          Books by Bright UK
        </h2>
        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem]"
        >
          <ProductCard
            :title="book.title"
            :description="book.summary"
            :price="book.default.price"
            :image="book.image ?? 'https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png'"
            :id="book.id"
            v-for="(book, index) in store.books"
            :key="index"
          />
        </div>
      </div>
      <div class="font-[600] text-[2rem] leading-[2rem] text-center underline">
        <RouterLink
        class="inline"
        :to="{name: 'books'}">
        View all books
    </RouterLink>
      </div>
    </Container>
  </section>
</template>

<style scoped></style>
