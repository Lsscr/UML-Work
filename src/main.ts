import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "uno.css";
import { createPinia } from "pinia";
import router from "./router";
import "@/theme/resetCSS.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia()).use(router).mount("#app");
