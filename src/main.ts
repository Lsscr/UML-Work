import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "uno.css";
import { createPinia } from "pinia";
import router from "./router";
import "@/theme/resetCSS.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPersist from "pinia-plugin-persist";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia).use(router).mount("#app");
