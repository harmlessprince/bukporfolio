<script setup>

import {Field} from "vee-validate";
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'text',
  },
  type:{
    type: String,
    required: false,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
    required: false,
  }
})
</script>

<template>
  <div class="flex items-center w-full">
    <Field :type="props.type" :placeholder="props.placeholder" :name="props.name" class="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" :model-value="modelValue" />
  </div>
</template>

<style scoped>

</style>