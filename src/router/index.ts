import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/homepage",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "/homepage",
        name: "Homepage",
        component: () => import("@/components/Homepage.vue"),
      },
      {
        path: "/entertainmentNews",
        name: "EntertainmentNews",
        component: () => import("@/components/EntertainmentNews.vue"),
      },
      {
        path: "/legalNews",
        name: "LegalNews",
        component: () => import("@/components/LegalNews.vue"),
      },
      {
        path: "/militaryNews",
        name: "MilitaryNews",
        component: () => import("@/components/MilitaryNews.vue"),
      },
      {
        path: "/schoolNews",
        name: "SchoolNews",
        component: () => import("@/components/SchoolNews.vue"),
      },
    ],
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
