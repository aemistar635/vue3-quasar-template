<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="emits('sideBar')"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import {defineEmits} from "vue"
const emits  = defineEmits(['sideBar'])
// import {ref} from "vue";

// let leftDrawerOpen = ref(false)
</script>
