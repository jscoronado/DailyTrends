import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import News from "../views/News";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    pathMatch: "full"
  },
  {
    path: "/ultimas-noticias",
    name: "News",
    component: News,
    pathMatch: "full"
  },
  /* {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    pathMatch: "full"
  },
  {
    path: "/:profile",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/:profile/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/:profile/category/:category/:item?",
    name: "Category",
    component: Category
  }
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
