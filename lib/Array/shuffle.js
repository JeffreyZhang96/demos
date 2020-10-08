function shuffle(arr) {
  let n = arr.length;
  while (n) {
    let i = Math.floor(Math.random() * n);
    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
    n--;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));
