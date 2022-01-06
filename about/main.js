import store from "@/store";
import { createApp } from "vue";
import App from "./App.vue";
import "@/style/index.scss";

createApp(App).use(store).mount("#app");
