import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
Vue.use(Router);

//路由配置

const router = new Router({
  mode: history,
  base: process.env.BASE_URL,
  routers: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "[request]" */ './views/Home.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
