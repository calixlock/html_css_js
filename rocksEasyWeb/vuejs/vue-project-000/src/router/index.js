import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/template",
      name: "template",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/TempView.vue"),
    },
    {
      path: "/reactivity",
      name: "reactivity",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/ReactivityView.vue"),
    },
    {
      path: "/computed",
      name: "computed",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/ComputedView.vue"),
    },
    {
      path: "/conditionalRender",
      name: "conditionalRender",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/ConditionalRenderView.vue"),
    },
    {
      path: "/listRender",
      name: "listRender",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/ListRenderingView.vue"),
    },
    {
      path: "/event",
      name: "event",
      // 2중단어 Vue파일 제목 주의
      component: () => import("../views/EventView.vue"),
    },
  ],
});

export default router;
