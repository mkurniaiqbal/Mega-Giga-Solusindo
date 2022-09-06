import Vue from "vue";
import VueRouter from "vue-router";
import FormLogin from "../components/FormLogin.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: FormLogin,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/FormRegister.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
