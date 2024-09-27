<script setup>
import Logo from '@/assets/logo.svg';
import Container from "@/components/Container.vue";
import {ref} from 'vue'

const menuState = ref(false)

const toggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <section class="bg-secondary">
    <Container>
      <nav class="h-[9.3rem] w-full justify-around items-center bg-secondary">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img :src="Logo" class="w-[5.3rem] h-[5.3rem]" alt="My Logo"/>
          </a>
          <div class="font-xsm text-lg leading-5 p-12 flex justify-between">
            <ul class="flex font-medium text-white">
              <li>
                <RouterLink :to="{ name: 'home'}" class="block py-2 px-3 hover:text-primary">Home
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'speaker'}" class="block py-2 px-3  hover:text-primary">About
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="block py-2 px-3 hover:text-primary">Services</RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="block py-2 px-3 hover:text-primary">Shop</RouterLink>
              </li>
              <li>
                <RouterLink class="block py-2 px-3 hover:text-primary" to="#">Blog</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <RouterLink :to="{ name: 'home'}" class="">
              <button class="font-sm text-sm text-primary border-primary w-[9.8rem] h-[4rem] border  rounded-md">
                Contact me
              </button>
            </RouterLink>
          </div>
        </div>

      </nav>
    </Container>

  </section>
</template>

<style scoped>

</style>