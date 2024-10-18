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
  <section class="bg-[#DADADA]">
    <Container class="w-full">
      <div
      class="grid grid-cols-[repeat(auto-fill,minmax(26.6rem,1fr))] max-small:grid-cols-[repeat(auto-fill,minmax(35rem,1fr))]
            small:max-medium:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]
      gap-[1.2rem] gap-y-[2rem]">
        <div class="overflow-hidden w-full max-sm:mx-auto relative group cursor-pointer h-[371px] bg-no-repeat bg-cover bg-center transition-transform duration-500"
             v-for="(role, index) in store.roles" :key="index"
             @click="getRoleLink(role.name.toLowerCase())"
             :style="{ backgroundImage: `url(${role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'})` }"
        >
          <div class="">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 transform group-hover:-translate-x-10" :style="{ backgroundImage: `url(${role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'})` }"></div>
            <!-- Overlay for text with sliding effect -->
            <div class="absolute opacity-0  inset-0 bg-black bg-opacity-60 flex justify-center items-start group-hover:opacity-100 flex-col">
              <p class="text-white font-medium  text-xl transform translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 p-2">
                {{role.summary.substring(0,250)}}
              </p>
              <span class="text-white text-xl font-bold p-2">Read More..</span>
            </div>
          </div>


          <div class="bg-primary text-xlg font-lg text-center text-white py-[0.65rem] absolute bottom-0 left-0 w-full z-10 grayscale-0">{{
              role.name
            }}
          </div>
<!--          <img :src="role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'" class="w-[100%] h-[241px] rounded-t-[10px] relative object-top object-cover" :alt="role.name"/>-->
        </div>
      </div>


    </Container>
  </section>


</template>

<style scoped>

</style>
