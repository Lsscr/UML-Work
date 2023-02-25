import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import "uno.css";
import pinia from "./store/pinia";
import "@/theme/resetCSS.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).mount("#app");
