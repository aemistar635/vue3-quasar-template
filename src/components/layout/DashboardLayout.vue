<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <Sidebar />
    <q-page-container>
      <div>
        <q-img
          class="absolute-top-left q-ma-lg"
          src="@/assets/doted_bg.png"
          style="width: 226px; height: 164px"
        />
        <q-img
          class="absolute-bottom-right q-ma-lg"
          src="@/assets/doted_bg.png"
          style="width: 226px; height: 164px"
        />
      </div>
      <router-view />
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
