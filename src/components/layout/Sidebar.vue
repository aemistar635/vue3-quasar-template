<template>
  <q-drawer
    bordered
    show-if-above
    v-bind="$attrs"
    class="bg-primary text-white"
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

      <div class="col-10 column justify-center q-pb-xl">
        <q-item
          v-for="(menu, index) in mainRoutes"
          :key="index"
          clickable
          :to="{ name: menu.name }"
          active-class
        >
          <q-item-section avatar>
            <Icon :name="menu.meta.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menu.meta.label }}</q-item-label>
            <q-item-label caption>{{ menu.meta.description }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="logout">
          <q-item-section avatar>
            <Icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="col-1 cursor-pointer">
        <q-btn-dropdown color="white" class="q-px-auto">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-img
                  src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                  style="height: 20px; width: 20px"
                />
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png"
                  style="height: 20px; width: 20px"
                />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                  style="height: 20px; width: 20px"
                />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
                  style="height: 20px; width: 20px"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const showMiniSidebar = ref(true);

const logout = function () {
  localStorage.removeItem("isLoggedIn");
  router.push({ name: "Login" });
};
const mainRoutes = ref([]);
onMounted(() => {
  const dashboardRoutes = router.options.routes.find(
    (f) => f.name == "DashboardLayout"
  );
  mainRoutes.value = dashboardRoutes.children;
});
</script>
