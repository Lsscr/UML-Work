import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unoCSS/vite";
import { presetUno, presetAttributify, presetIcons } from "unoCSS";
import uncossConfig from "./unocss.config";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

UnoCSS(uncossConfig);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    AutoImport({
      dts: "./src/types/global/auto-import.d.ts",
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "./src/types/global/auto-components.d.ts",
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue"],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 配置项目别名
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  define: { "process.env": {} },
});
