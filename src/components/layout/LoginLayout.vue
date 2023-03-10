<template>
  <q-layout view="lHh Lpr lFf" class="login-bg row justify-center items-center">
    <q-card class="my-card login-card">
      <q-card-section>
        <router-view></router-view>
      </q-card-section>
    </q-card>
  </q-layout>
</template>
<script setup>
import { ref } from "vue";
import CheckBox from "@/components/generic/CheckBox.vue";
const remember = ref(false);
</script>
<style lang="scss" scoped>
.login-card {
  width: 700px;
  max-width: 700px;
  border-radius: 50px;
  padding: 50px 100px;
}
.login-bg {
  background-image: url("@/assets/login_bg.gif");
  background-size: cover;
}
</style>
