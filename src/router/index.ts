import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/news",
    name: "NewsList",
    component: () => import("@/components/newsList.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/newsAdd",
    name: "NewsAdd",
    component: () => import("@/views/NewsAdd.vue"),
  },
  {
    path: "/new/:id",
    name: "NewsDetail",
    component: () => import("@/components/NewsDetail.vue"),
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
