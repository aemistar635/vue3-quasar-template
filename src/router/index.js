import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  try {
    if (!isLoggedIn && to.name !== "Login" && to.name !== "ForgotPassword") {
      next({ name: "Login", replace: true });
    } else {
      if (isLoggedIn && to.name == "Login") {
        next({ name: "Home" });
      } else if (to.meta.requiresAuth && !isLoggedIn) {
        next({ name: "Login", replace: true });
      } else {
        next();
      }
    }
  } catch (e) {
    next({ name: "Login", replace: true }).catch(() => {});
  }
});

export default router;
