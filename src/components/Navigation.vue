<script setup>
import Logo from '@/assets/logo.svg';
import Container from "@/components/Container.vue";
import {ref} from 'vue'
import {useCartStore} from "@/store/cart.store.js";
import {useToggleSidebar} from "@/store/toggleSideBar.store.js";

const cartStore = useCartStore();
const sideBarStore = useToggleSidebar()

console.log(sideBarStore.sideBar)

</script>

<template>
  <div
    class="h-[9.3rem] bg-secondary border-b-[1.5px] border-mainBorder flex items-center fixed top-0 w-full z-[500]"
  >
    <Container>
      <nav class="px-12 py-5 flex items-center justify-between ">
        <div class="logo w-[5.3rem] h-[5.3rem]">
          <a href="/">
            <img :src="Logo" alt="My Logo" />
          </a>
        </div>
        <ul class="text-white font-xsm text-sm flex items-center max-sm:hidden">
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
          <li class="mainnav__links relative mt-4">
            <RouterLink class="mainnavlink" :to="{name: 'cart'}">
              <span class="material-icons text-[#fff] text-[22px]">local_mall</span>
             <span class="block bg-primary flex items-center justify-center w-[15px] h-[15px] rounded-full text-[#fff] text-[13px] absolute -top-[0.5rem] -right-[0.5rem] z-50">{{cartStore.cartItemCount}}</span></RouterLink>
          </li>
        </ul>
        <div>
          <RouterLink :to="{ name: 'contact'}" class="border-0 max-sm:hidden" activeClass="border-0">
            <button
              class="font-sm text-xsm border text-primary border-primary p-4  rounded-md outline-0"
            >
              Contact me
            </button>
          </RouterLink>
        </div>
        <!-- this only appears on mobile  -->
        <div class="sm:hidden flex items-center">
          <li class="mt-3 mr-[2rem] relative">
            <RouterLink class="mainnavlink" :to="{name: 'cart'}">
              <span class="material-icons text-[#fff] text-[22px]">local_mall</span>
             <span class="block bg-primary flex items-center justify-center w-[15px] h-[15px] rounded-full text-[#fff] text-[13px] absolute -top-[0.5rem] -right-[0.5rem] z-50">{{cartStore.cartItemCount}}</span></RouterLink>
          </li>
          <span v-if="!sideBarStore.sideBar" class="material-icons text-[#fff] text-[27px] cursor-pointer" @click="sideBarStore.showSideBar()">menu</span>
          <span v-else class="material-icons text-[#fff] text-[27px] cursor-pointer" @click="sideBarStore.hideSideBar()">close</span>
        </div>
       
      </nav>
    </Container>
  </div>
</template>

<style scoped></style>
