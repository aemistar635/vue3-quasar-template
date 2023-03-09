<template>
  <label v-if="label" class="label">Enter Your {{ label }}</label>
  <q-input
    v-model="text"
    outlined
    v-bind="$attrs"
    :placeholder="placeholder ? placeholder : label"
    :type="isPasswordType ? 'password' : 'text'"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <template v-if="type == 'password'" v-slot:append>
      <q-icon
        :name="isPasswordType ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPasswordType = !isPasswordType"
      />
    </template>
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
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
const isPasswordType = ref(props.type == "password" ? true : false);
</script>
<style>
.label {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #84899c;
}
</style>
