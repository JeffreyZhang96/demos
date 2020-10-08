Array.prototype.myReduce = function (fn, initVal) {
  let arr = Array.prototype.slice.call(this);
  let acc = initVal ? initVal : arr[0];
  let startIndex = initVal ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, this);
  }
  return acc;
};

var sum = [2, 3, 4, 5].myReduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);
