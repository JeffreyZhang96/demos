const fn = () => 1;
console.log(fn());

let num = 3 ** 2;
console.log(num);

let foo = function(a, b, c) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
};
foo();

let hasTwo = [1, 2, 3].includes(2);
console.log(hasTwo);

Promise.resolve().finally();
