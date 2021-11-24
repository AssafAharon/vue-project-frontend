import { createStore, Store } from "vuex";
import { AutomaticPageData } from "../entities/AutomaticPageData.interface";
import { AppState, APP_INITIAL_STATE } from "./state";

const store: Store<AppState> = createStore({
  state: APP_INITIAL_STATE,
  mutations: {
    addNewPage(state, payload: AutomaticPageData) {
      state.automaticWebsiteData.allPagesData.push(payload);
    }
  },
  actions: {
    addNewPage({ commit }) {
      commit("addNewPage");
    }
  },
  getters: {
    automaticWebsiteData(state: AppState) {
      return state.automaticWebsiteData;
    },
    allAutomaticPagesData(state: AppState) {
      return state.automaticWebsiteData.allPagesData;
    }
  }
});

export default store;