<script setup>
const props = defineProps(['title'])
</script>

<template>
  <header class="font-header text-header max-sm:text-[3.0rem] text-secondary leading-[4.2rem]">{{props.title}}</header>
</template>

<style scoped>

</style>