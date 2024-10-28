<script setup>

import CommentIcon1 from "@/assets/commentIcon1.svg";
defineProps({
  isCurrentQuote: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'John Doe',
  },
  quote: {
    type: String,
    default: 'quote',
  },
  position: {
    type: String,
    default: 'user position',
  },
  company: {
    type: String,
    default: 'user company name',
  },
})
</script>

<template>
  <div
      class="bg-[#F9F7EA] rounded-[10px] pl-[1.9rem] pr-[3.1rem] pt-[38.5px] pb-[22.5px] min-h-[25.4rem] flex flex-col gap-[2rem] justify-between hover:scale-[1.1] w-full"
  >
    <q
        class="font-medium text-[16px] leading-[2.4rem] text-[#000000] text-justify"
    >
      {{ quote.slice(0, 200) }}
    </q>

    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row">
        <img
            :src="image"
            class="w-[55px] h-[59px] mr-[1rem] rounded-full"
            alt="bright"
        />
        <span class="text-[20px] text-secondary font-bold"
        >{{ name }}<br />
              <span class="font-sm text-[#838080] text-xsm"
              > {{ company ?? '' }}</span
              >
            </span>
      </div>
      <img
          :src="CommentIcon1"
          class="w-[24px] h-[18px] mr-[1rem]"
          alt="comment"
      />
    </div>
  </div>
</template>

<style scoped>

</style>