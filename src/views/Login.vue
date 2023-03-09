<template>
  <div class="login-content q-gutter-y-md">
    <h2 class="heading">Welcome to Darvis</h2>
    <p class="sub-heading">Please login to your account.</p>
    <q-form class="q-gutter-md" @submit="onSubmit">
      <Input
        v-model="username"
        label="Username"
        :rules="[(val) => !!val || 'Field is required']"
      />
      <Input v-model="password" label="Password" type="password" />
      <div class="row justify-between items-center">
        <CheckBox label-text="Remember me" />
        <p
          class="q-pa-none q-ma-none forgot-link text-primary"
          @click="$router.push({ name: 'ForgotPassword' })"
        >
          Forgot password?
        </p>
      </div>
      <Button label="Login" class="full-width q-mt-xl q-py-lg" type="submit" />
    </q-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CheckBox from "@/components/generic/CheckBox.vue";
const username = ref("");
const password = ref("");
const remember = ref(false);

function onSubmit() {
  console.log("thiesetrstsdfasdf", username.value, password.value);
}
</script>
<style lang="scss" scoped>
.login-content {
  .heading {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 10px;
  }
  .sub-heading {
    font-size: 20px;
    color: #abacb3;
  }
  .forgot-link {
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
  }
  .login-bg {
    background-image: url("@/assets/login_bg.gif");
  }
}
</style>
