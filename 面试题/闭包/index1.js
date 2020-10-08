const foo = (function () {
  let num = 0;
  function add() {
    return ++num;
  }
  add.reset = function () {
    num = 0;
  };
  return add;
})();

let a = foo();
let b = foo();
let c = foo();
foo.reset();
let d = foo();
console.log(a, b, c, d);
