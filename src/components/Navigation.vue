<script setup>
import Logo from '@/assets/logo.svg';
import Container from "@/components/Container.vue";
import {ref} from 'vue'
import {useCartStore} from "@/store/cart.store.js";

const cartStore = useCartStore();
const menuState = ref(false)

const toggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <div
    class="h-[9.3rem] bg-secondary border-b-[1.5px] border-mainBorder flex items-center fixed top-0 w-full z-10"
  >
    <Container>
      <nav class="px-12 py-5 flex items-center justify-between">
        <div class="logo w-[5.3rem] h-[5.3rem]">
          <a href="/">
            <img :src="Logo" alt="My Logo" />
          </a>
        </div>
        <ul class="text-white font-xsm text-sm flex items-center">
          <li class="mainnav__links">
            <RouterLink :to="{ name: 'home'}" class="mainnavlink"
              >Home
            </RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink :to="{ name: 'speaker'}" class="mainnavlink"
              >About
            </RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink :to="{name: 'gallery'}" class="mainnavlink">Gallery</RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink :to="{name: 'products'}" class="mainnavlink">Shop</RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink class="mainnavlink" :to="{name: 'blog'}">Blog</RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink class="mainnavlink" :to="{name: 'cart'}">Cart <span class="text-primary">({{cartStore.cartItemCount}})</span></RouterLink>
          </li>
        </ul>
        <div>
          <RouterLink :to="{ name: 'contact'}" class="border-0" activeClass="border-0">
            <button
              class="font-sm text-xsm border text-primary border-primary p-4  rounded-md outline-0"
            >
              Contact me
            </button>
          </RouterLink>
        </div>
      </nav>
    </Container>
  </div>
</template>

<style scoped></style>
