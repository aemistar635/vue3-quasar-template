<template>
  <Button>
    <q-img
      class="q-pa-none q-ma-none"
      :src="selectedLanguage.src"
      style="min-height: 20px; min-width: 20px"
    />
  </Button>
  <q-menu>
    <q-list style="min-width: 30px">
      <q-item
        v-for="lang in languages"
        :key="lang.name"
        v-close-popup
        clickable
        @click="selectedLanguage = lang"
      >
        <q-item-section>
          <q-img :src="lang.src" style="min-height: 20px; min-width: 20px" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script setup>
import { ref } from "vue";
const selectedLanguage = ref({
  name: "Eng",
  src: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
});
const languages = ref([
  {
    name: "Eng",
    src: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  },
  {
    name: "Ger",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png",
  },
  {
    name: "Fran",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
  },
  {
    name: "Span",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
  },
]);
</script>
