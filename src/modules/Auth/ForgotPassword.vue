<template>
  <div class="login-content q-gutter-y-md">
    <h2 class="heading">Forgot password?</h2>
    <Input label="email" type="email" />
    <div class="row justify-end forgot-link q-gutter-x-xs">
      <p class="text-grey-7">Already remember password?</p>
      <p
        class="text-primary cursor-pointer items-right"
        @click.prevent="$router.push({ name: 'Login' })"
      >
        Login
      </p>
    </div>
    <Button label="Send Request" class="full-width q-mt-xl q-py-lg" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import CheckBox from "@/components/generic/CheckBox.vue";
const remember = ref(false);
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
