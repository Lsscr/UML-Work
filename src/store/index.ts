import { defineStore } from "pinia";
import { computed } from "vue";

export const useIndexStore = defineStore("indexStore", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      activeIndex: "homepage",
    };
  },
  // 类似于 computed 计算属性一样
  getters: {
    // 自动将返回类型推断为数字
  },
  // actions 可以是异步的，您可以在其中await 任何 API 调用甚至其他操作
  actions: {
    setActiveIndex(newNameUrl: string): void {
      this.activeIndex = newNameUrl;
    },
  },
  persist: {
    enabled: true,
  },
});
