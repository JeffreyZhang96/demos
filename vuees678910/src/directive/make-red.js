import Vue from "vue";

//ES5
// Vue.directive("make-red", {
//   inserted: function(el) {
//     el.style.color = "red";
//   },
// });
//ES6
Vue.directive("make-red", {
  inserted(el) {
    el.style.color = "red";
  },
});
