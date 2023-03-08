export const routes = [
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
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
