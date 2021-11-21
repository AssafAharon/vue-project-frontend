import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import WebsiteCreation from "@/views/WebsiteCreation.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/WebsiteCreation',
    name: 'WebsiteCreation',
    component: WebsiteCreation
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
