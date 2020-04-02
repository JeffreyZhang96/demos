import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 99
  },
  mutations: {
    add(state) {
      state.count++;
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit("add");
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit("addN", step);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit("sub");
      }, 1000);
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit("subN", step);
      }, 1000);
    }
  },
  getters: {
    showNum(state) {
      return "当前最新数量是【" + state.count + "】";
    }
  }
});

export default store;
