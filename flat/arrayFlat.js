// function flatten(arr) {
//   let res = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       res = res.concat(flatten(item));
//     } else {
//       res.push(item);
//     }
//   });
//   return res;
// }

function flatten(arr) {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
}

function flattenDeep(arr, num) {
  return num > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? flattenDeep(cur, num - 1) : cur),
        []
      )
    : arr.slice();
}

let arr = [1, 2, 3, [4, 5, 6, [7, 8]], 9];

console.log(flatten(arr));
console.log(flattenDeep(arr, 1));
