<template>
  <q-layout view="lHh Lpr lFf">
    <Header @sideBar="showSidebar = !showSidebar" />
    <Sidebar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

const showSidebar = ref(false);
</script>
