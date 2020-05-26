let array = [5, 4, 3, 1, 2, 3, 4, 5, 6];

function shellSort(nums) {
  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < nums.length; i++) {
      for (let j = i - gap; j >= 0 && nums[j] > nums[j + gap]; j -= gap) {
        [nums[j], nums[j + gap]] = [nums[j + gap], nums[j]];
      }
    }
  }
  return nums;
}
console.log(shellSort(array));
