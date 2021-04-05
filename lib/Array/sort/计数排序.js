function countingSort(iArr, max) {
  var n = iArr.length;
  var oArr = [];
  var C = [];
  for (var i = 0; i <= max; i++) {
    C[i] = 0;
  }
  for (var j = 0; j < n; j++) {
    C[iArr[j]]++;
  }
  for (var k = 0; k <= max; k++) {
    while (C[k]-- > 0) {
      oArr.push(k);
    }
  }
  return oArr;
}
