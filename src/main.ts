import { createApp } from "@vue/runtime-dom";
import App from "./App.vue";
import router from "./shared/router";
import store  from "./shared/store/store";
import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";

const app = createApp(App);
new WaveUI(app, {});

app.use(router).use(store).mount("#app");