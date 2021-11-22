import { createRouter, createWebHistory } from "vue-router";
import App from "../../App.vue";
import Home from "../../generator-website/components/Home.vue";
import WebsiteCreation from "../../generator-website/components/WebsiteCreation.vue";
import AutomaticWebsite from "../../automatic-website/components/AutomaticWebsite.vue";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/GeneratorWebsite",
    component: Home,
    children: [
      {
        path: "WebsiteCreation",
        component: WebsiteCreation
      }
    ]
  },
  {
    path: "/AutomaticWebsite",
    component: AutomaticWebsite
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
