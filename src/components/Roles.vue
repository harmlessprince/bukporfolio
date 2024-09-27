<script setup>

import Bright1 from "@/assets/bright1.png";
import {useRoleStore} from "@/store/roles.store.js";
import {onBeforeMount, onMounted} from "vue";
import Container from "@/components/Container.vue";

const store = useRoleStore()
onBeforeMount(() => {
  store.getRoles();
});
</script>

<template>
  <section class="bg-red-100 p-8">
    <Container class="w-full bg-[#F9F7EA]">
          <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-[#F9F7EA] w-full">
            <div class="rounded-[10px]" v-for="(role, index) in store.roles" :key="index">
              <img :src="role.image ?? Bright1" class="w-[100%] h-[241px] rounded-t-[10px] relative" :alt="role.name"/>
              <div class="bg-primary text-xsm font-lg text-center text-basic py-[1rem] rounded-b-[10px]">{{ role.name }}</div>
            </div>
          </div>
    </Container>
  </section>


</template>

<style scoped>

</style>