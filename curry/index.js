let fn = function(a, b, c) {
  return a + b + c;
};

let createCurry = (fn, ...args) => {
  let arr = args || [];
  let length = fn.length;
  return (...res) => {
    let newArr = arr.slice(0);
    newArr.push(...res);
    if (newArr.length < length) {
      // if (res.length > 0 || newArr.length < length) {
      return createCurry.call(this, fn, ...newArr);
    } else {
      return fn.apply(this, newArr);
    }
  };
};

console.log(createCurry(fn)(1)(2)(3));
console.log(createCurry(fn)(1, 2)(3));
console.log(createCurry(fn)(1)(2, 3));
console.log(createCurry(fn)(1, 2, 3));
// console.log(createCurry(fn)(1, 2, 3)());

function curryIt(fn) {
  var length = fn.length,
    args = [];
  var result = function(arg) {
    args.push(arg);
    length--;
    if (length <= 0) {
      return fn.apply(this, args);
    } else {
      return result;
    }
  };

  return result;
}
console.log(curryIt(fn)(1)(2)(3));
