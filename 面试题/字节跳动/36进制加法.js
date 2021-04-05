function add_36(str1, str2) {
  let symbol = '0123456789abcdefghijklmnopqrstuvwxyz';
  let i = str1.length - 1,
    j = str2.length - 1,
    add = 0;
  let ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    let x = i >= 0 ? symbol.indexOf(str1[i]) : 0;
    let y = j >= 0 ? symbol.indexOf(str2[j]) : 0;
    let result = x + y + add;
    ans.unshift(result % 36);
    add = Math.floor(result / 36);
    i--;
    j--;
  }
  return ans.join('');
}

console.log(add_36('1b', '2x'));
