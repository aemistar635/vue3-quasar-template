<template>
  <label v-if="label" class="label">Enter Your {{ label }}</label>
  <q-input
    outlined
    v-bind="$attrs"
    :placeholder="placeholder ? placeholder : label"
    :type="type"
  >
    <slot name="icon"></slot>
  </q-input>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  // modelValue: {
  //   type: String,
  //   default: "",
  // },
  type: {
    type: String,
    default: "text",
  },
});
</script>
<style>
.label {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #84899c;
}
</style>
