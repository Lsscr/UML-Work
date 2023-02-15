import { defineStore } from "pinia";

const useCommonStore = defineStore("commonStore", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  // 类似于 computed 计算属性一样
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter + 1 * 2;
    },
  },
  // actions 可以是异步的，您可以在其中await 任何 API 调用甚至其他操作
  actions: {
    increment() {
      this.counter++;
    },
  },
});
