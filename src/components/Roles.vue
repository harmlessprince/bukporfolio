<script setup>

import {useRoleStore} from "@/store/roles.store.js";
import {onBeforeMount, onMounted, watch} from "vue";
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
      <div 
      class="grid grid-cols-[repeat(auto-fill,minmax(23.6rem,1fr))] max-small:grid-cols-[repeat(auto-fill,minmax(35rem,1fr))]
            small:max-medium:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] 
      gap-[1.2rem] gap-y-[2rem]">
        <div class="rounded-[10px] overflow-hidden w-full max-sm:mx-auto" v-for="(role, index) in store.roles" :key="index"
             @click="getRoleLink(role.name.toLowerCase())">
          <img :src="role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'" class="w-[100%] h-[241px] rounded-t-[10px] relative object-top object-cover" :alt="role.name"/>
          <div class="bg-primary text-xlg font-lg text-center text-white py-[0.65rem]">{{
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
