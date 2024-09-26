<script setup>
import Logo from '@/assets/logo.svg';
</script>

<template>
  <nav class="z-[1000] fixed w-full px-[13rem] py-[2rem] flex justify-between items-center bg-secondary font-primary border border-x-0 border-t-0 border-b-1 border-navLink">
    <img :src="Logo" class="w-[3.31rem] h-[3.31rem]" alt="My Logo" />

    <div class="text-navLink font-xsm text-sm">
      <RouterLink :to="{ name: 'home'}" class="mr-[6rem] hover:text-primary">Home</RouterLink>
      <RouterLink :to="{ name: 'about'}" class="mr-[6rem] hover:text-primary">About</RouterLink>
      <span class="mr-[6rem] hover:text-primary">Services</span>
      <span class="mr-[6rem] hover:text-primary">Shop</span>
      <span class="hover:text-primary">Blog</span>
    </div>

    <RouterLink :to="{ name: 'home'}" class="">
    <button class="px-[1.5rem] py-[1rem] font-sm text-sm text-primary border border-primary rounded-[10px]">Contact me</button>
    </RouterLink>     
  </nav>
</template>

<style scoped>

</style>