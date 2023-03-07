<template>
  <q-drawer
    bordered
    show-if-above
    v-bind="$attrs"
    class="bg-grey-2"
    :mini="showMiniSidebar"
  >
    <q-list class="column fit">
      <div class="col-1 q-pa-xs cursor-pointer">
        <q-item
          class="justify-center"
          @click.capture="showMiniSidebar = !showMiniSidebar"
        >
          <q-img src="@/assets/logo.png" style="width: 48px; height: 48px" />
        </q-item>
      </div>

      <div class="col-11 column justify-center q-pb-xl">
        <q-item
          v-for="(menu, index) in sidebarMenu"
          :key="index"
          clickable
          @click="$router.push({ name: menu.url })"
        >
          <q-item-section avatar>
            <q-icon :name="menu.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menu.title }}</q-item-label>
            <q-item-label caption>{{ menu.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { ref } from "vue";

const showMiniSidebar = ref(true);
const sidebarMenu = ref([
  { title: "About", description: "quasar.dev", url: "about", icon: "school" },
  {
    title: "Home",
    description: "github.com/quasarframework",
    url: "home",
    icon: "code",
  },
]);
</script>
