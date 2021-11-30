import { createRouter, createWebHistory } from "vue-router";
import App from "../../App.vue";
import Home from "../../components/Home.vue";
import EditYourBook from "../../components/EditYourBook.vue";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/EditYourBook",
    component: EditYourBook
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
