"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

var fn = function fn() {
  return 1;
};

console.log(fn());
var num = Math.pow(3, 2);
console.log(num);

var foo = function foo(a, b, c) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
};

foo();
var hasTwo = [1, 2, 3].includes(2);
console.log(hasTwo);
Promise.resolve()["finally"]();