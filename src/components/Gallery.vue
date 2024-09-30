<script setup>
const props = defineProps(['imageArray']);
</script>

<template>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
      <div class="">
        <img class="h-auto max-w-full rounded-lg" :src="props.imageArray[0]"
             alt="">
      </div>
      <div class="">
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[1]" alt="">
      </div>
      <div class="">
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[2]" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[3]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[4]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[5]" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[6]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[7]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[8]" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[9]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
            :src="props.imageArray[10]" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
        :src="props.imageArray[11]" alt="">
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>