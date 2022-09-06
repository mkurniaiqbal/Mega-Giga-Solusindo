import Vue from "vue";
import VueRouter from "vue-router";
import FormLogin from "../components/FormLogin.vue";
import Dashboard from "../views/Dashboard.vue";
import FormAdd from "../components/FormAdd.vue";
import FormEdit from "../components/FormEdit.vue";

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
  {
    path: "/formadd",
    name: "formadd",
    component: FormAdd,
  },
  {
    path: "/formedit/:id",
    name: "formedit",
    component: FormEdit,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
