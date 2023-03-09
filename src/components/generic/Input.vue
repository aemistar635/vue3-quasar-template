<template>
  <label v-if="label" class="label">Enter Your {{ label }}</label>
  <q-input
    v-model="text"
    outlined
    v-bind="$attrs"
    :placeholder="placeholder ? placeholder : label"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <template v-if="isPasswordType" v-slot:append>
      <q-icon
        :name="type == 'password' ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="emit('showHidePass')"
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
const emit = defineEmits(["showHidePass"]);
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
