<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router';
import {useToggleSidebar} from "@/store/toggleSideBar.store.js";
const props = defineProps(['menuState'])
const toggleSidebar = useToggleSidebar()

const aboutDropdown = ref(false);
const route = useRoute(); // Access the current route object

console.log(route.path)

const isRouteActive = (link, routePath) => {
      if(link === "about"){
        let pathLink  = route.path;
        console.log(pathLink)
        return /^\/about/.test(route.path);
      }
      if(link === "shop"){
        let pathLink  = route.path;
        console.log(pathLink)
        return /^\/shop/.test(route.path);
      }

      if(link === "blog"){
        let pathLink  = route.path;
        console.log(pathLink)
        return /^\/blog/.test(route.path);
      }

      return route.path === routePath;

    };

function toggleAboutDropdown() {
       aboutDropdown.value = !aboutDropdown.value
    }

</script>

<template>
  <nav :class='toggleSidebar.sideBar ? "sidebarContainer" : "sidebarContainerClose"'>
<!-- <nav class="sidebarContainer"> -->
    <div class="text-[#000] font-xsm text-sm w-full">
      <ul class=" font-xsm text-[1.8rem] flex-col items-center w-full space-y-[3rem]">
        <li :class='isRouteActive("", "/") ?  "bg-primaryColor text-[#000] sideBarLink w-full" : "sideBarLink w-full"'>
          <RouterLink :to="{ name: 'home'}" class="w-full block p-[1rem]" @click="toggleSidebar.hideSideBar()"
            >Home
          </RouterLink>
        </li>
        <li class="dropdown">
          <div @click="toggleAboutDropdown()" 
          :class='isRouteActive("about", "") ? "bg-primaryColor text-[#000] w-full flex justify-between cursor-pointer items-end p-[1rem]" : "w-full flex justify-between cursor-pointer items-end p-[1rem]"'>
            <span>About</span>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <div v-show="aboutDropdown">
            <RouterLink 
            :class='isRouteActive("", "/about/author") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
            :to="{name: 'author'}" @click="toggleSidebar.hideSideBar()">Author</RouterLink>
           <RouterLink 
           :class='isRouteActive("", "/about/speaker") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
           :to="{name: 'speaker'}" @click="toggleSidebar.hideSideBar()">Speaker</RouterLink>
            <RouterLink 
            :class='isRouteActive("", "/about/trainer") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
            :to="{name: 'trainer'}" @click="toggleSidebar.hideSideBar()">Trainer</RouterLink>
            <RouterLink 
            :class='isRouteActive("", "/about/coach") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
            :to="{name: 'coach'}" @click="toggleSidebar.hideSideBar()">Coach</RouterLink>
            <RouterLink 
            :class='isRouteActive("", "/about/entrepreneur") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
            :to="{name: 'entrepreneur'}" @click="toggleSidebar.hideSideBar()">Entrepreneur</RouterLink>
          </div>
        </li>
        <li class="">
          <RouterLink :to="{name: 'gallery'}" 
         :class='isRouteActive("", "/gallery") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
          @click="toggleSidebar.hideSideBar()">Gallery</RouterLink>
        </li>
        <li class="">
          <RouterLink :to="{name: 'products'}" 
          :class='isRouteActive("shop", "") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
          @click="toggleSidebar.hideSideBar()">Shop</RouterLink>
        </li>
        <li class="">
          <RouterLink 
          :class='isRouteActive("blog", "") ? "bg-primaryColor p-[1rem] block" : "p-[1rem] block"'
          :to="{name: 'blog'}" @click="toggleSidebar.hideSideBar()">Blog</RouterLink>
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
    padding: 1rem 0 0 0;
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

.sideBarLink{
  width: 100%;
}

.dropdown {
  position: relative;
}
</style>