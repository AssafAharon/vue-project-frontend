import { createRouter, createWebHistory } from "vue-router";
import Home from "../../subjects/Home.vue";
import EditYourBook from "../../subjects/edit-your-book/EditYourBook.vue";
import PreviewComponent from "../../subjects/Preview.vue";
import CreateNarrativeComponent from "../../subjects/create-narrative/CreateNarrative.vue";

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
  },
  {
    path: "/CreateNarrative",
    component: CreateNarrativeComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
