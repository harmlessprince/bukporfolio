<script setup>

import Bright1 from "@/assets/bright1.png";
import {useRoleStore} from "@/store/roles.store.js";
import {onBeforeMount, onMounted} from "vue";
import Container from "@/components/Container.vue";
import {useRouter} from 'vue-router'

const store = useRoleStore()
const router = useRouter();
onBeforeMount(() => {
  store.getRoles();
});

function getRoleLink(name) {
  const roleRoutes = []
  router?.options?.routes?.forEach(route => {
    if (route.path.startsWith('/about')) {
      roleRoutes.push(route.name)
    }
  });
  if (roleRoutes.includes(name)) {
    router?.push({name: name});
  }
}
</script>

<template>
  <section class="bg-[#DADADA] pt-[4.7rem] pb-[4.7rem]">
    <Container class="w-full">
      <div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
        <div class="rounded-[10px]" v-for="(role, index) in store.roles" :key="index"
             @click="getRoleLink(role.name.toLowerCase())">
          <img :src="role.image ?? Bright1" class="w-[100%] h-[241px] rounded-t-[10px] relative" :alt="role.name"/>
          <div class="bg-primary text-xsm font-lg text-center text-white py-[1rem] rounded-b-[10px]">{{
              role.name
            }}
          </div>
        </div>
      </div>
    </Container>
  </section>


</template>

<style scoped>

</style>