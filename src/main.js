import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import quasarUserOptions from "./quasar-user-options";
import Input from "@/components/generic/Input.vue";
import Button from "@/components/generic/Button.vue";
import Icon from "@/components/generic/Icon.vue";

const pinia = createPinia();
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(pinia)
  .component("Input", Input)
  .component("Button", Button)
  .component("Icon", Icon)
  .mount("#app");
