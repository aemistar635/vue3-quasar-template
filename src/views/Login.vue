<template>
  <q-layout view="lHh Lpr lFf" class="login-bg row justify-center items-center">
    <q-card
      class="my-card login-card"
      style="
        width: 700px;
        max-width: 700px;
        border-radius: 50px;
        padding: 50px 100px;
      "
    >
      <q-card-section>
        <div class="login-content q-gutter-y-md">
          <h2 class="heading">Welcome to Darvis</h2>
          <p class="sub-heading">Please login to your account.</p>
          <Input label="Enter Your Username" />
          <Input label="Enter Your Password" />
          <div class="row justify-between items-center">
            <CheckBox label-text="Remember me" />
            <p class="q-pa-none q-ma-none forgot-link text-primary">Forgot password?</p>
          </div>
          <Button label="Login" class="full-width q-mt-xl q-py-lg" />
        </div>
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
</style>
