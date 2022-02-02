/*
 * @Description:
 * @Version: 2.0
 * @Autor: qinghui
 * @Date: 2022-02-02 12:33:43
 * @LastEditors: qinghui
 * @LastEditTime: 2022-02-02 12:41:32
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
