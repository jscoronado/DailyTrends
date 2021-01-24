import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import LastNews from "../views/LastNews";
import News from "../views/News";
import ListNews from "../views/ListNews";

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
    name: "Last News",
    component: LastNews,
    pathMatch: "full"
  },
  {
    path: "/noticias",
    name: "News",
    component: News,
    pathMatch: "full"
  },
  {
    path: "/listado-noticias",
    name: "ListNews",
    component: ListNews,
    pathMatch: "full"
  },
  {
    path: "/noticia/add",
    name: "add",
    component: () => import('../components/ArticleCreate')
  },
  {
    path: "/noticia/edit/:id",
    name: "edit",
    component: () => import('../components/ArticleEdit')
  },
  /*
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
