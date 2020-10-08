let array = [5, 4, 3, 1, 2, 3, 4, 5, 6];

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      minIndex = nums[j] < nums[minIndex] ? j : minIndex;
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}
console.log(selectionSort(array));
