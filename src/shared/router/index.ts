import { createRouter, createWebHistory } from "vue-router";
import App from "../../App.vue";
import Home from "../../generator-website/components/Home.vue";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/GeneratorWebsite/Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
