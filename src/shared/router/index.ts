import { createRouter, createWebHistory } from "vue-router";
import WebsiteCreation from "../../generator-website/components/WebsiteCreation.vue";
import AutomaticWebsite from "../../automatic-website/components/AutomaticWebsite.vue";
import App from "../../App.vue";
import Home from "../../generator-website/components/Home.vue";
import Page from "../../automatic-website/components/page/Page.vue"
import Chat from "../../automatic-website/components/chat/Chat.vue"

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/GeneratorWebsite/Home",
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
    component: AutomaticWebsite,
    children: [
      {
        path: "Page",
        component: Page
      },
      {
        path: "Chat",
        component: Chat
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
