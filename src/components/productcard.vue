<script setup>
import Bright1 from '@/assets/bright1.png';
import {useCartStore} from "@/store/cart.store.js";

const cartStore = useCartStore();
const props = defineProps(['title', "url", "price", "description", "id"])
</script>

<template>
  <div
    class="rounded-[10px] border border-[#BEBEBE] p-[1rem] text-left mb-[2rem] flex flex-col justify-center gap-[1rem]"
  >
    <div class="w-[100%] h-[247px] relative">
      <img
        :src="url"
        class="w-full h-full object-cover object-center"
        alt="book"
      />
    </div>
    <h4 class="text-secondary font-header text-basic mt-[0.5rem]">
      {{props.title}}
    </h4>
    <div class="text-regular font-xsm text-xsm">
      <p>
        {{props.description}}
      </p>
    </div>
    <div class="text-xlg text-[#21211E] font-header mt-auto">
      #{{new Intl.NumberFormat().format(props.price)}}
    </div>
    <div class="flex gap-[1rem]">
      <button
        class="min-w-[13.7rem] grow  h-[4.3rem] bg-primary border border-primary text-secondary text-xsm font-sm rounded-[8px]"
        @click="cartStore.addToCart({id: props.id, price: props.price, title: props.title})"
      >
        Add to Cart
      </button>
      <button
        class="min-w-[13.7rem] grow  h-[4.3rem] bg-transparent border border-primary text-secondary text-xsm font-sm rounded-[8px]"
      >
        View more
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
