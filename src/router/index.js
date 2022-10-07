import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import TestLinkPage from "../views/TestLinkPage.vue";

const routes = [
   {
      path: "/",
      name: "main",
      component: MainPage,
   },
   {
      path: "/test",
      name: "home",
      component: TestLinkPage,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
