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
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/components/layout/LoginLayout.vue"
      ),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/ForgotPassword.vue"),
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
      /* webpackChunkName: "dashboard" */ "@/views/HomeView.vue"
    ),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/HelloWorld.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];
