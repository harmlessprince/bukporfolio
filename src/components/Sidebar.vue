<script setup>
const props = defineProps(['menuState'])
</script>

<template>
  <nav :class='props.menuState ? "sidebarContainer" : "sidebarContainerClose"'>

    <div class="text-navLink font-xsm text-sm w-full text-center">
      <RouterLink :to="{ name: 'home'}" class="">Home</RouterLink>
      <RouterLink :to="{ name: 'speaker'}" class="">About</RouterLink>
      <span class="">Services</span>
      <span class="">Shop</span>
      <span class="">Blog</span>
    </div>

    <RouterLink :to="{ name: 'home'}" class="">
    <button class="px-[1.5rem] py-[1rem] font-sm text-sm text-primary border border-primary rounded-[10px]">Contact me</button>
    </RouterLink>   
    
  </nav>
</template>

<style scoped>
.sidebarContainer{
    background-color: white;
    padding: 15% 0 0 0;
    width: 100%;
    height: 100vh;
    z-index: 400;
    opacity: 1;
    position: fixed;
    top: 7rem;
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