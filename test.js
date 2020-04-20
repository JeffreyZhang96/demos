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

// console.log(flatten(arr));
console.log(flattenDeep(arr, 1));
