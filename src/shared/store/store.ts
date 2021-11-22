import { createStore } from "vuex";
import { Page } from "../Page.class";

export interface State {
  myPages: Page[];
}

export const state: State = {
  myPages: [
    new Page("Yamamoto"),
    new Page("Soi Fon"),
    new Page("Retsu"),
    new Page("Byakuya"),
    new Page("Sajin"),
    new Page("Shunsui"),
    new Page("Toshiro"),
    new Page("Zaraki"),
    new Page("Mayuri"),
    new Page("Jushiro")]
};

const store = createStore({
  state,
  mutations: {
    addNewPage(state, payload: Page) {
      state.myPages.push(payload);
    }
  },
  actions: {
    addNewPage({ commit }) {
      commit("addNewPage");
    }
  },
  getters: {
    myPages() {
      return state.myPages;
    }
  }
});

export default store;