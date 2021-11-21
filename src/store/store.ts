import { createStore } from "vuex";
import { Page } from "../classes/Page.class";

export interface State {
  myPages: Page[];
}

export const state: State = {
  myPages: []
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