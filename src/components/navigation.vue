<script setup>
import Logo from '@/assets/logo.svg';
import Container from "@/components/Container.vue";
import { ref } from 'vue'

const menuState = ref(false)

const  toggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <div class="border border-x-0 border-t-0 border-b-1 border-navLink fixed w-full z-40 bg-secondary">
    <Container class="">
      <!--    -->
      <nav class="top-0 h-[9.3rem] w-full flex justify-around items-center font-primary">
        <img :src="Logo" class="w-[5.3rem] h-[5.3rem]" alt="My Logo" />

        <div class="text-navLinkColor font-xsm text-sm leading-5 p-12 flex justify-between">
          <RouterLink :to="{ name: 'home'}" class="mr-[6rem] hover:text-primary">Home</RouterLink>
          <RouterLink :to="{ name: 'about'}" class="mr-[6rem] hover:text-primary">About</RouterLink>
          <RouterLink to="#" class="mr-[6rem] hover:text-primary">Services</RouterLink>
          <RouterLink to="#" class="mr-[6rem] hover:text-primary">Shop</RouterLink>
          <RouterLink class="mr-[6rem] hover:text-primary" to="#">Blog</RouterLink>
        </div>

        <RouterLink :to="{ name: 'home'}" class="">
          <button class="font-sm text-sm text-primary border-primary w-[9.8rem] h-[4rem] border p-[10px] rounded-md">Contact me</button>
        </RouterLink>

        <span v-if="!menuState" class="material-icons large:hidden w-[26px] h-[27px] text-basic mr-[2rem]" @click="toggleMenu">menu</span>
      <span v-if="menuState" class="material-icons large:hidden w-[26px] h-[27px] text-basic mr-[2rem]" @click="toggleMenu">close</span>
      </nav>
    </Container>
  </div>


</template>

<style scoped>

</style>