<script setup>
import {useCartStore} from "@/store/cart.store.js";
import {formatMoney} from "../services/util.js";

const cartStore = useCartStore();
const props = defineProps(['title', "image", "price", "description", "id"])
</script>

<template>
  <div
    class="rounded-[10px] border border-[#BEBEBE] p-[1rem] text-left mb-[2rem] flex flex-col justify-center gap-[1rem]"
  >
    <div class="w-[100%] h-[247px] relative">
      <img
        :src="image"
        class="w-full h-full object-cover object-center"
        alt="book"
      />
    </div>
    <h4 class="text-secondary font-header text-basic mt-[0.5rem]">
      {{title}}
    </h4>
    <div class="text-regular font-xsm text-xsm">
      <p>
        {{description}}
      </p>
    </div>
    <div class="text-xlg text-[#21211E] font-header mt-auto">
      #{{formatMoney(price)}}
    </div>
    <div class="flex gap-[1rem]">
      <button
        class="min-w-[13.7rem] grow  h-[4.3rem] bg-primary border border-primary text-secondary text-xsm font-sm rounded-[8px]"
        @click="cartStore.addToCart({id, price: price, title, variation : 'hardcover', image})"
      >
        Add to Cart
      </button>
      <RouterLink
          :to="{name: 'item', params: {id}}"
        class="min-w-[13.7rem] grow  h-[4.3rem] bg-transparent border border-primary text-secondary text-xsm font-sm rounded-[8px] flex items-center justify-center"
      >
        View more
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
