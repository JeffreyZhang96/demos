function solution(harmList, totalHarm) {
  let arr = new Array(totalHarm + 1).fill(-1);
  arr[0] = 0;
  for (let i = 0; i < harmList.length; i++) {
    if (harmList[i] <= totalHarm) {
      arr[harmList[i]] = 1;
    }
  }
  for (let i = 1; i <= totalHarm; ++i) {
    for (let j = 0; j < harmList.length; j++) {
      if (harmList[j] <= i) {
        arr[i] = Math.min(arr[i], arr[i - harmList[j]] + 1);
      }
    }
  }
  return arr[totalHarm];
}
solution([1, 2, 5], 11);
