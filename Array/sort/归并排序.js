let array = [5, 4, 3, 1, 2, 3, 4, 5, 6];

function mergeSort(nums) {
  let len = nums.length;
  if (len < 2) {
    return nums;
  }
  let mid = len >> 1;
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift());
  }
  return res.concat(left.length ? left : right);
}
console.log(mergeSort(array));
