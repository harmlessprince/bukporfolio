<template>
<!--  <Field :name="name" :model-value="modelValue" @change="updateValue">-->
    <Multiselect
        :track-by="trackBy"
        :value="modelValue"
        :name="name"
        :label="name"
        class="text-xl font-normal text-gray-700 h-16 focus:border-blue-navy"
        :options="options"
        :searchable="isSearchable"
        :placeholder=placeholder
        :allow-empty=false
        @change="updateValue"
    >
      <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.label }}</strong> is written in<strong>
        {{ option.value }}</strong></template>
    </Multiselect>
<!--  </Field>-->
</template>

<script setup>
import Multiselect from "vue-multiselect";
import {Field} from "vee-validate";

defineProps({
  options: Array,
  name: String,
  label: String,
  modelValue: {
    type: [Array, Number, String],
    default: [],
  },
  isSearchable: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: "Select item",
  },
  trackBy: {type: String, default: "name"},
});

const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  console.log(value);
  emit("update:modelValue", value);
};
</script>

<style>

</style>
<!-- https://vue3datepicker.com/props/calendar-configuration/ -->
<!-- https://www.npmjs.com/package/@vueform/multiselect -->