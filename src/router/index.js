import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import TestLinkPage from "../views/TestLinkPage.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: MainPage,
   },
   {
      path: "/test",
      name: "test",
      component: TestLinkPage,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
