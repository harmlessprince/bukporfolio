<script setup>
import Logo from '@/assets/logo.svg';
import Container from "@/components/Container.vue";
import {ref} from 'vue'
import {useCartStore} from "@/store/cart.store.js";
import {useToggleSidebar} from "@/store/toggleSideBar.store.js";
import { useRoute } from 'vue-router';


const cartStore = useCartStore();
const sideBarStore = useToggleSidebar()
const route = useRoute(); // Access the current route object

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

</script>

<template>
  <div
    class="h-[9.3rem] bg-secondary border-b-[1.5px] border-mainBorder flex items-center fixed top-0 w-full z-[500]"
  >
    <Container>
      <nav class="px-12 max-medium:px-2 py-5 flex items-center justify-between ">
        <div class="logo w-[5.3rem] h-[5.3rem]">
          <a href="/">
            <img :src="Logo" alt="My Logo" />
          </a>
        </div>
        <ul class="text-white font-xsm text-sm flex items-center max-medium:hidden">
          <li class="mainnav__links">
            <RouterLink :to="{ name: 'home'}"
            :class='isRouteActive("", "/") ? "mainNavLinkActive" : "mainnavlink"'
              >Home
            </RouterLink>
          </li>
          <li class="mainnav__links">
            <div class="dropdown">
              <div :class='isRouteActive("about", "") ? "dropbtnActive space-x-[0.7rem] flex items-end" : "dropbtn space-x-[0.7rem] flex items-end hover:text-primaryColor"'>
                <span>About</span>
                <span class="material-icons">keyboard_arrow_down</span>
              </div>
              <div class="dropdown-content">
                <RouterLink :class='isRouteActive("", "/about/author") ? "bg-primaryColor" : "bg-transparent"' :to="{name: 'author'}">Author</RouterLink>
               <RouterLink :class='isRouteActive("", "/about/speaker") ? "bg-primaryColor" : "bg-transparent"' :to="{name: 'speaker'}">Speaker</RouterLink>
                <RouterLink :class='isRouteActive("", "/about/trainer") ? "bg-primaryColor" : "bg-transparent"' :to="{name: 'trainer'}">Trainer</RouterLink>
                <RouterLink :class='isRouteActive("", "/about/coach") ? "bg-primaryColor" : "bg-transparent"' :to="{name: 'coach'}">Coach</RouterLink>
                <RouterLink :class='isRouteActive("", "/about/entrepreneur") ? "bg-primaryColor" : "bg-transparent"' :to="{name: 'entrepreneur'}">Entrepreneur</RouterLink>
              </div>
            </div>
          </li>
          <li class="mainnav__links">
            <RouterLink :to="{name: 'gallery'}" 
            :class='isRouteActive("", "/gallery") ? "mainNavLinkActive" : "mainnavlink"'
            >Gallery</RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink :to="{name: 'products'}" 
              :class='isRouteActive("shop", "") ? "mainNavLinkActive" : "mainnavlink"'
            >Shop</RouterLink>
          </li>
          <li class="mainnav__links">
            <RouterLink 
              :class='isRouteActive("blog", "") ? "mainNavLinkActive" : "mainnavlink"'
              :to="{name: 'blog'}"
             >Blog</RouterLink>
          </li>
          <li class="mainnav__links relative mt-4">
            <RouterLink class="mainnavlink" :to="{name: 'cart'}">
              <span class="material-icons text-[#fff] text-[22px]">local_mall</span>
             <span class="block bg-primary flex items-center justify-center w-[15px] h-[15px] rounded-full text-[#fff] text-[13px] absolute -top-[0.5rem] -right-[0.5rem] z-50">{{cartStore.cartItemCount}}</span></RouterLink>
          </li>
        </ul>
        <div>
          <RouterLink :to="{ name: 'contact'}" class="border-0 max-medium:hidden" activeClass="border-0">
            <button
              class="hover:scale-[1.2] font-sm text-xsm border text-primary border-primary p-4 rounded-md outline-0"
            >
              Contact me
            </button>
          </RouterLink>
        </div>

        <!-- this only appears on mobile  -->
        <div class="medium:hidden flex items-center">
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

<style scoped>
.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtnActive{
  color: #C7AE2E;
  border-bottom: 4px solid #C7AE2E;
  font-size: 16px;
  cursor: pointer;
}

.dropbtn:hover{
  color: #C7AE2E;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #C7AE2E}

.dropdown:hover .dropdown-content {
  display: block;
}

.mainnavlink{
  border-bottom: 0 solid #000;
  transition: all 1s ease;
}

.mainnavlink:hover{
  transition: all 1s ease;
  color: #C7AE2E;
  border-bottom: 4px solid #C7AE2E;

}

.mainNavLinkActive{
  color: #C7AE2E;
  border-bottom: 4px solid #C7AE2E;
}

</style>
