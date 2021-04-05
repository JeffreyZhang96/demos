//sum(2,3) sum(2)(3) 5

function sum() {
  let _args = Array.prototype.slice.call(arguments);
  let _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  _adder.toString = function () {
    return _args.reduce((acc, cur) => acc + cur);
  };
  return _adder;
}

console.log(sum(1, 2, 3, 4), sum(1)(2, 3)(4), sum(1)(2)(3)(4));
