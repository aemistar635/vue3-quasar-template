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
          v-for="(menu, index) in mainRoutes"
          :key="index"
          clickable
          @click="$router.push({ name: menu.name })"
        >
          <q-item-section avatar>
            <q-icon :name="menu.meta.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menu.meta.label }}</q-item-label>
            <q-item-label caption>{{ menu.meta.description }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-drawer>
</template>
<script setup>
import router from "@/router";
import { routes } from "@/router/router";
import { ref, onMounted } from "vue";

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
const logout = function () {
  localStorage.removeItem("isLoggedIn");
  router.push({ name: "Login" });
};
const mainRoutes = ref([]);
onMounted(() => {
  const dashboardRoutes = routes.find((f) => f.name == "DashboardLayout");
  mainRoutes.value = dashboardRoutes.children;
});
</script>
