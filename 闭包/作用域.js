//1.变量提升导致内层变量可能会覆盖外层变量
var a = 1;
function aaa() {
  console.log(a);
  if (true) {
    var a = 2;
  }
}
aaa();
//2.循环计数的i会泄露全局变量
for (var b = 1; b < 3; b++) {
  console.log(b);
}
console.log(b);

//ES6
let c = 1;
function bbb() {
  console.log(c);
  if (true) {
    let c = 2;
  }
}
bbb();

for (let d = 1; d < 3; d++) {
  console.log(d);
}
//console.log(d);

//块级作用域代替IIFE

(function () {
  var i = 1;
})();

{
  let i = 1;
}

//严格模式 ES5在块级作用域声明函数会报错 ES6不会
('use strict');
if (true) {
  function eee() {}
}
