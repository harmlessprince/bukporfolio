<script setup>
import Qoutation from '@/assets/qoutationmark.svg';
import {ref} from 'vue'
import {FwbButton, FwbModal} from 'flowbite-vue'

const isShowModal = ref(false)

function closeModal() {
  isShowModal.value = false
}

function showModal() {
  isShowModal.value = true
}

const props = defineProps(['title', "quote"])
</script>

<template>

  <div
      class="w-full min-h-[32.4rem] bg-basicColor rounded-[10px] p-[1.2rem] text-left mb-[2rem] max-small:mb-0 flex flex-col justify-between gap-[1rem]">
    <div>
      <img :src="Qoutation" class="w-[4.2rem] h-[3.8rem] " alt="book"/>
      <header class="text-[2.4rem] font-header text-secondary mt-[0.5rem]">{{ props.title }}</header>
      <p class="text-regular font-xsm text-xsm">{{ props.quote }}</p>
    </div>
    <!--    <div>-->
    <!--      <fwb-button @click="showModal" class="bg-transparent text-primary">-->
    <!--        Read more-->
    <!--      </fwb-button>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
</style>