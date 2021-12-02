import { createStore, Store } from "vuex";
import { AppState, APP_INITIAL_STATE } from "./state";

const store: Store<AppState> = createStore({
  state: APP_INITIAL_STATE,
  mutations: {
  },
  actions: {
  },
  getters: {
    book() {
      return store.state.books[0];
    }
  }
});

export default store;