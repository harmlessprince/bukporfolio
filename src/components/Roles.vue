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
  <section class="bg-[#DADADA] py-[4.4em]">
    <Container class="w-full">
      <div
      class="grid grid-cols-[repeat(auto-fill,minmax(26.6rem,1fr))] max-small:grid-cols-[repeat(auto-fill,minmax(100%,1fr))]
            small:max-medium:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]
      gap-[1.2rem] gap-y-[2rem]">
<!--        <div class="relative bg-cover bg-center" style="position: relative;" v-for="(role, index) in store.roles" :key="index">-->
<!--          <div class="absolute inset-0 grayscale bg-cover bg-center opacity-100 z-0" :style="{ backgroundImage: `url(${role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'})`}"></div>-->
<!--          <div class="relative z-10">-->
<!--            &lt;!&ndash; Your non-grayscale content here &ndash;&gt;-->
<!--            <p>This text and other elements won’t be affected by the grayscale filter.</p>-->
<!--          </div>-->
<!--        </div>-->

        <div class="overflow-hidden w-full max-sm:mx-auto relative group cursor-pointer h-[371px] bg-cover bg-top bg-no-repeat"
             v-for="(role, index) in store.roles" :key="index"
             @click="getRoleLink(role.name.toLowerCase())"
        >
          <div class="absolute inset-0  bg-cover bg-top opacity-100 z-0" :style="{ backgroundImage: `url(${role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'})`}"></div>
          <div class="">
<!--            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 transform group-hover:-translate-x-10" :style="{ backgroundImage: `url(${role.image ?? 'https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729081988/IMG_1711_g9mabj.png'})` }"></div>-->
            <!-- Overlay for text with sliding effect -->
            <div class="absolute opacity-0  inset-0 bg-black bg-opacity-80 flex justify-center items-start group-hover:opacity-100 flex-col">
              <p class="text-white font-medium  text-xl transform translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 p-2 text-center w-[25rem]">
                {{role.summary.substring(0,300)}}
              </p>
              <span class="text-white text-xl font-bold p-2 cursor-pointer">Read More..</span>
            </div>
          </div>


          <div class="bg-primary text-[1.6rem] font-lg text-center text-white py-[0.65rem] absolute bottom-0 left-0 w-full z-10 ">
            <span class="filter-none">
               {{role.name}}
            </span>
          </div>
        </div>
      </div>


    </Container>
  </section>


</template>

<style scoped>
.grayscale-item {
  filter: grayscale(100%);
}
.filter-none {
  filter: none !important; /* Override the parent filter */
}
</style>
