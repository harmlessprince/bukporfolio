<script setup>
const props = defineProps(['menuState'])
import {useToggleSidebar} from "@/store/toggleSideBar.store.js";
const toggleSidebar = useToggleSidebar()
</script>

<template>
  <nav :class='toggleSidebar.sideBar ? "sidebarContainer" : "sidebarContainerClose"'>
<!-- <nav class="sidebarContainer"> -->
    <div class="text-[#000] font-xsm text-sm w-full text-center">
      <ul class=" font-xsm text-sm flex-col items-center w-full space-y-[3rem]">
        <li class="">
          <RouterLink :to="{ name: 'home'}" class="" @click="toggleSidebar.hideSideBar()"
            >Home
          </RouterLink>
        </li>
        <li class="">
          <RouterLink :to="{ name: 'speaker'}" class="" @click="toggleSidebar.hideSideBar()"
            >About
          </RouterLink>
        </li>
        <li class="">
          <RouterLink :to="{name: 'gallery'}" class="" @click="toggleSidebar.hideSideBar()">Gallery</RouterLink>
        </li>
        <li class="">
          <RouterLink :to="{name: 'products'}" class="" @click="toggleSidebar.hideSideBar()">Shop</RouterLink>
        </li>
        <li class="">
          <RouterLink class="" :to="{name: 'blog'}" @click="toggleSidebar.hideSideBar()">Blog</RouterLink>
        </li>
      </ul>
    </div>

    
    <div class="w-[20rem] mx-auto mt-[3rem]">
    <RouterLink :to="{ name: 'contact'}" class="border-0 mx-auto" activeClass="border-0" @click="toggleSidebar.hideSideBar()">
      <button
        class="font-sm w-full text-xsm border text-primary border-primary p-4  rounded-md outline-0"
      >
        Contact me
      </button>
    </RouterLink>
  </div>
  </nav>
</template>

<style scoped>
.sidebarContainer{
    background-color: white;
    padding: 5rem 0 0 0;
    width: 100%;
    height: 100vh;
    z-index: 500;
    opacity: 1;
    position: fixed;
    top: 9rem;
    left: 0;
    transition: left 1s;
}

.sidebarContainerClose{
    background-color: white;
    padding: 15% 0 0 0;
    width: 100%;
    height: 100vh;
    z-index: 400;
    opacity: 1;
    position: fixed;
    top: 7rem;
    left: 100%;
    transition: left 1s;
}

</style>