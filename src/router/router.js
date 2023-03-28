export const routes = [
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue"),
  },
  {
    path: "/",
    name: "AuthLayout",
    redirect: { name: "Login" },
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/components/layout/AuthLayout.vue"
      ),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/modules/Auth/Login.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
          import(
            /* webpackChunkName: "login" */ "@/modules/Auth/ForgotPassword.vue"
          ),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },

  {
    path: "/",
    name: "DashboardLayout",
    component: import(
      /* webpackChunkName: "dashboard" */ "@/components/layout/DashboardLayout.vue"
    ),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/HelloWorld.vue"),
        meta: {
          label: "Home",
          icon: "school",
          requiresAuth: true,
          description: "github.com/quasarframework",
        },
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/modules/Dashboard/AboutView.vue"
          ),
        meta: {
          label: "About",
          icon: "code",
          requiresAuth: true,
          description: "quasar.dev",
        },
      },
    ],
  },
];
