<script setup>
const props = defineProps(['title'])
</script>

<template>
  <header class="font-[700] text-[2.8rem] max-small:text-[2.4rem] text-secondary leading-[4.2rem] max-small:leading-[3.2rem]">{{props.title}}</header>
</template>

<style scoped>

</style>