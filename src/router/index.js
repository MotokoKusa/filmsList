import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/pages/main/main";
import film from "@/pages/film/film";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

Vue.use(VueRouter);

const routes = [
  { name: "main", component: main, path: "/" },
  { name: "film", component: film, path: "/film/:id" },
  { name: "notFound", component: NotFoundPage, path: "*" },
];

const router = new VueRouter({
  routes,
});

export default router;
