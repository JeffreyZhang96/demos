import router from './router';

new Vue({
  el: '#app',
  router, //不简写就是router:router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
