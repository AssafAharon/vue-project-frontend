import Page from "@/subjects/story/entities/Page.class";
import { createStore, Store } from "vuex";
import { AppState, APP_INITIAL_STATE } from "./state";

const store: Store<AppState> = createStore({
  state: APP_INITIAL_STATE,
  mutations: {
    savePage(state: AppState, page: Page) {
      state.books[0].pages[page.pageNumber - 1] = {...page, items: [...page.items]};
    },
    addPage(state: AppState) {
      state.books[0].pages.push(new Page(state.books[0].pages.length + 1));
    }
  },
  actions: {
    savePage({ commit }) {
      commit("savePage");
    },
    addPage( {commit }) {
      commit("savePage");
    }
  },
  getters: {
    book() {
      return store.state.books[0];
    }
  }
});

export default store;