import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { AuthGuard } from "@/utils/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    beforeEnter: AuthGuard,
    component: Home,
    redirect: "Home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/DashBoard.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Login.vue"),
      },
      {
        beforeEnter: AuthGuard,
        path: "/univarsities",
        name: "Univarsities",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Univarsities.vue"),
      },
      {
        path: "/todo",
        name: "Todo",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Todo.vue"),
      },
      {
        path: "/add-task",
        name: "AddTask",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AddTask.vue"),
      },
      {
        path: "/post",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Post.vue"),
      },
      {
        path: "/slot",
        name: "Slot",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Slot.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
