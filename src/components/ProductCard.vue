<script setup>
import {useCartStore} from "@/store/cart.store.js";
import {formatMoney, titleCase} from "../services/util.js";

const cartStore = useCartStore();
const props = defineProps(['title', "image", "price", "description", "id"])
</script>

<template>
  <div
      class="rounded-[10px] border border-[#BEBEBE] p-[1rem] text-left flex flex-col justify-center gap-[1rem] "
  >
    <div class="w-full flex justify-center items-center">
      <div class="w-[291px] h-[247px]">
        <img
            :src="image"
            class="w-full max-h-full object-top object-contain"
            alt="book"
        />
      </div>
    </div>

    <h4 class="text-secondary font-header text-basic mt-[0.5rem] capitalize">
      {{ titleCase(title) }}
    </h4>
    <div class="text-regular font-xsm text-xsm">
      <p>
        {{ description.substring(0,250) + '...' }}
      </p>
    </div>
    <div class="text-xlg text-[#21211E] font-header mt-auto text-left">
      #{{ formatMoney(price) }}
    </div>
    <div class="flex gap-[1rem]">
      <button
          class="hover:scale-[1.1] min-w-[13.7rem] grow  h-[4.3rem] bg-primary border border-primary text-secondary text-xsm font-sm rounded-[8px]"
          @click="cartStore.addToCart({id, price: price, title, variation : 'hardcover', image})"
      >
        Add to Cart
      </button>
      <RouterLink
          :to="{name: 'book', params: {id}}"
          class="hover:scale-[1.1] min-w-[13.7rem] grow  h-[4.3rem] bg-transparent border border-primary text-secondary text-xsm font-sm rounded-[8px] flex items-center justify-center"
      >
        View more
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
