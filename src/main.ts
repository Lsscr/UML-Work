import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "uno.css";
import { createPinia } from "pinia";
import router from "./router";
import "@/theme/resetCSS.css";

createApp(App).use(createPinia()).use(router).mount("#app");
