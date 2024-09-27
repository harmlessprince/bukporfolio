<script setup>

import Bright1 from "@/assets/bright1.png";
import {useRoleStore} from "@/store/roles.store.js";
import {onBeforeMount, onMounted} from "vue";
const store = useRoleStore()
onBeforeMount(() => {
  store.getRoles();
});
</script>

<template>
  <div class="bg-bg1 px-sides py-[5rem] flex flex-row flex-wrap justify-between">
    <div class="w-[222px] rounded-[10px]" v-for="(role, index) in store.roles" :key="index">
      <img :src="role.image ?? Bright1" class="w-[100%] h-[241px] rounded-t-[10px] relative" :alt="role.name"/>
      <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">{{role.name}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>