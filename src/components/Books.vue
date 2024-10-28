<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {useBookstore} from "@/store/books.store.js";
import {onBeforeMount} from "vue";
import Container from "@/components/Container.vue";

const store = useBookstore()
onBeforeMount(() => {
  store.getBooks();
});
defineProps({
  maximumNumberOfBooks: {
    type: Number,
    default: 3,
  },
  shouldSlice: {
    type: Boolean,
    default: true
  }
})
</script>

<template>

  <Container>
    <div class="">
      <!-- <h3 class="font-lg text-basic text-primary font-primary mb-[1.3rem] max-medium:mb-0">Books</h3> -->
      <h2 class="font-header text-header max-medium:text-[3.0rem] text-secondary mb-[3rem] text-center">
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
              v-for="(book, index) in (shouldSlice === true) ? store.books.slice(0, maximumNumberOfBooks) : store.books"
              :key="index"
          />


      </div>
    </div>
  </Container>

</template>

<style scoped></style>
