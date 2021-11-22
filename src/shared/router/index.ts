import { createRouter, createWebHistory } from "vue-router";
import Home from "../../generator-website/components/Home.vue";
import WebsiteCreation from "../../generator-website/components/WebsiteCreation.vue";

const routes = [
  {
    path: '/GeneratorWebsite',
    component: Home,
    children: [
      {
        path: 'WebsiteCreation',
        component: WebsiteCreation
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
