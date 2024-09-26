<script setup>
const props = defineProps(['title'])

console.log(props.title)
</script>

<template>
  <header class="font-header text-header text-secondary">{{props.title}}</header>
</template>

<style scoped>

</style>