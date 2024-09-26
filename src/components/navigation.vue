<script setup>
import Logo from '@/assets/logo.svg';
import { ref } from 'vue'

const menuState = ref(false)

const  toggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <nav class="z-[1000] fixed w-full px-sides max-medium:px-msides medium:max-large:px-tsides py-[2rem] flex justify-between items-center bg-secondary font-primary border border-x-0 border-t-0 border-b-1 border-navLink">
    <img :src="Logo" class="w-[3.31rem] h-[3.31rem]" alt="My Logo" />

    <div class="text-navLink font-xsm text-sm max-large:hidden">
      <RouterLink :to="{ name: 'home'}" class="mr-[6rem] hover:text-primary">Home</RouterLink>
      <RouterLink :to="{ name: 'about'}" class="mr-[6rem] hover:text-primary">About</RouterLink>
      <span class="mr-[6rem] hover:text-primary">Services</span>
      <span class="mr-[6rem] hover:text-primary">Shop</span>
      <span class="hover:text-primary">Blog</span>
    </div>

    <RouterLink :to="{ name: 'home'}" class="max-large:hidden">
    <button class="px-[1.5rem] py-[1rem] font-sm text-sm text-primary border border-primary rounded-[10px]">Contact me</button>
    </RouterLink>   
    
    <span v-if="!menuState" class="material-icons large:hidden w-[26px] h-[27px] text-basic mr-[2rem]" @click="toggleMenu">menu</span>
    <span v-if="menuState" class="material-icons large:hidden w-[26px] h-[27px] text-basic mr-[2rem]" @click="toggleMenu">close</span>
  </nav>
</template>

<style scoped>

</style>