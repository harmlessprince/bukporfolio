<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {useBookstore} from "@/store/books.store.js";
import {onBeforeMount} from "vue";
import Container from "@/components/Container.vue";
import {useRoute} from "vue-router";

const store = useBookstore()
const route = useRoute()
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
              :image="book.card_image ?? 'https://res.cloudinary.com/chiaka/image/upload/v1711909077/uvqagrnsk8sjzwswwnpz.png'"
              :id="book.id"
              v-for="(book, index) in (shouldSlice === true) ? store.books.slice(0, maximumNumberOfBooks) : store.books"
              :key="index"
          />


      </div>
    </div>
  </Container>

</template>

<style scoped></style>
