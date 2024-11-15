<script setup>
const props = defineProps(['bannerUrl', 'notes', 'theme'])
</script>

<template>
  <div class="border border-[#BEBEBE] rounded-[10px] p-[1.6rem]">
    <div class="w-full h-[44.5rem]">
        <img
        :src="bannerUrl"
        class="h-full w-full object-cover"
        alt="banner"
    />
    </div>
    <h1 class="mt-[1.6rem] text-[1.8rem] leading-[2.8rem] font-[600] text-[#101828]">  {{ props.theme}}</h1>
    <p class="font-[400] text-[1.4rem] leading-[2.0rem] text-[#667085]">
        {{ props.notes }}
    </p>
    <div class="mt-[2.4rem] w-full">
    <button class="w-full rounded-[8px] h-[4.3rem] bg-[#C7AE2E] font-[500] text-[1.4rem] text-[#000] leading-[1.7rem]">Register for event</button>
    </div>

  </div>
</template>

<style scoped>

</style>