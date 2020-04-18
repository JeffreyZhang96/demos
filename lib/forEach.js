Array.prototype.myForEach = function (callback) {
  if (this instanceof Array) {
    for (let i of this) {
      callback(i);
    }
  }
};

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((item) => {
  console.log(item);
});
arr.myForEach(function (item) {
  console.log(item);
});
