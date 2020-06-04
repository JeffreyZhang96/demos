let array = [5, 4, 3, 1, 2, 3, 4, 5, 6];

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0 && nums[j] > nums[j + 1]; j--) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
  }
  return nums;
}
console.log(insertionSort(array));
