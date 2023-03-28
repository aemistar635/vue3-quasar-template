<template>
  <q-header class="transparent">
    <q-toolbar>
      <q-toolbar-title class="q-ma-lg text-black page_title">{{
        route.name
      }}</q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style lang="scss">
.page_title {
  font-size: 1.45rem;
  font-weight: 700;
}
</style>
