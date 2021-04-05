var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  let ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    let x = i >= 0 ? +num1[i] : 0;
    let y = j >= 0 ? +num2[j] : 0;
    let result = x + y + add;
    ans.unshift(result % 10);
    add = Math.floor(result / 10);
    i--;
    j--;
  }
  return ans.join('');
};
