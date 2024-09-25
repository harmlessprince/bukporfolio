<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <h1>Hello There!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink :to="{ name: 'home'}" class="mr-3.5 text-green-500">Go to Home</RouterLink>

      <RouterLink :to="{ name: 'about'}" class="mr-3.5 text-blue-500">Go to About</RouterLink>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
