import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "info",
    component: InfoView,
  },
  {
    path: "/plan",
    name: "plan",
    component: () => import("../views/PlanView.vue"),
  },
  {
    path: "/add-on",
    name: "add-on",
    component: () => import("../views/AddOnView.vue"),
  },
  {
    path: "/summary",
    name: "summary",
    component: () => import("../views/SummaryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
