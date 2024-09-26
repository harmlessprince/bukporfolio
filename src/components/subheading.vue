<script setup>
const props = defineProps(['title'])

console.log(props.title)
</script>

<template>
  <header class="font-lg text-basic text-primary font-primary">{{props.title}}</header>
</template>

<style scoped>

</style>