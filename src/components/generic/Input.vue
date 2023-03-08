<template>
  <label v-if="label" class="label">{{ label }}</label>
  <q-input outlined v-model="text" :dense="dense" v-bind="$attrs"> </q-input>
</template>
<script setup>
import { placeholder } from "@babel/types";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
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
