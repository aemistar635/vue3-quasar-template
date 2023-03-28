<template>
  <q-checkbox v-bind="$attrs">
    <label class="label-text">{{ labelText }}</label>
  </q-checkbox>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  labelText: {
    type: String,
    default: "",
  },
});
const inputValue = ref(false);
</script>
<style scoped>
.label-text {
  display: block;
  font-size: 20px;
  color: #84899c;
}
</style>
