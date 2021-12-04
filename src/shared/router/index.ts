import { createRouter, createWebHistory } from "vue-router";
import Home from "../../subjects/Home.vue";
import EditYourBook from "../../subjects/edit-your-book/EditYourBook.vue";
import PreviewComponent from "../../subjects/Preview.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/EditYourBook",
    component: EditYourBook
  },
  {
    path: "/Preview",
    component: PreviewComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
