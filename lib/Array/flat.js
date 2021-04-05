// function flatten(arr) {
//   let str = JSON.stringify(arr).replace(/\[|\]/g, '');
//   return JSON.parse('[' + str + ']');
// }

// function flatten(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function flatten(arr) {
//   let result = [];
//   function fn(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let item = arr[i];
//       if (Array.isArray(arr[i])) {
//         fn(item);
//       } else {
//         result.push(item);
//       }
//     }
//   }
//   fn(arr);
//   return result;
// }

// function flatten(arr) {
//   return arr.reduce(
//     (pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur),
//     []
//   );
// }

// function flatten(arr) {
//   while (arr.some(Array.isArray)) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }

// function flattenDeep(arr, num) {
//   return num > 0
//     ? arr.reduce(
//         (pre, cur) =>
//           pre.concat(Array.isArray(cur) ? flattenDeep(cur, num - 1) : cur),
//         []
//       )
//     : arr.slice();
// }

Array.prototype.myFlat = function (depth = 1) {
  return depth > 0
    ? this.reduce(
        (acc, cur) =>
          acc.concat(Array.isArray(cur) ? cur.myFlat(depth - 1) : cur),
        []
      )
    : this.slice();
};

let arr = [1, 2, 3, [4, 5, 6, [7, 8]], 9];

console.log(arr.myFlat());
console.log(arr.myFlat(2));
