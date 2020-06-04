let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr1 = arr1.concat(arr2);
arr1 = [...arr1, ...arr2];
// Array.prototype.push.apply(arr1, arr2);

console.log(arr1);
