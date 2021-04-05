// 输入：字符串'1, 2, 3, 5, 7, 8, 10'
// 输出：字符串'1~3, 5, 7~8, 10'

function transform(str) {
  if (str.length < 2) return str;
  let arr = str.split(',');
  let res = [];
  let p = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1) {
      if (p === i - 1) {
        res.push(arr[p]);
      } else {
        res.push(arr[p] + '~' + arr[i - 1]);
      }
      p = i;
    }
  }
  return res.join(',');
}
console.log(transform('1,2,3,5,7,8,10'));
