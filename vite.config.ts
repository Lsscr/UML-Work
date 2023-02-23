import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import uncossConfig from "./unocss.config";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

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
      dts: "./src/types/auto-import.d.ts",
      imports: ["vue", "vue-router"],
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      dts: "./src/types/auto-components.d.ts",
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue"],
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        AntDesignVueResolver()
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  // 配置项目别名
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  define: {
    "process.env": {
      NDOE_ENV: "development",
      BABASE_URL: "//121.4.146.92:8080/",
    },
  },
  server: {
    port: 8089,
    host: true,
    proxy: {
      "/api": {
        target: "http://121.4.146.92:8080/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 不可以省略rewrite
      },
    },
  },
});
