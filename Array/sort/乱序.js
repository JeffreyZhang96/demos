function test_shuffle(shuffleFn) {
  let n = 100000;
  let countObj = {
    a: Array.from({ length: 10 }).fill(0),
    b: Array.from({ length: 10 }).fill(0),
    c: Array.from({ length: 10 }).fill(0),
    d: Array.from({ length: 10 }).fill(0),
    e: Array.from({ length: 10 }).fill(0),
    f: Array.from({ length: 10 }).fill(0),
    g: Array.from({ length: 10 }).fill(0),
    h: Array.from({ length: 10 }).fill(0),
    i: Array.from({ length: 10 }).fill(0),
    j: Array.from({ length: 10 }).fill(0),
  };
  for (let i = 0; i < n; i++) {
    let nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    shuffleFn(nums);
    countObj.a[nums.indexOf('a')]++;
    countObj.b[nums.indexOf('b')]++;
    countObj.c[nums.indexOf('c')]++;
    countObj.d[nums.indexOf('d')]++;
    countObj.e[nums.indexOf('e')]++;
    countObj.f[nums.indexOf('f')]++;
    countObj.g[nums.indexOf('g')]++;
    countObj.h[nums.indexOf('h')]++;
    countObj.i[nums.indexOf('i')]++;
    countObj.j[nums.indexOf('j')]++;
  }
  console.table(countObj);
}

// function shuffle(nums) {
//   return nums.sort(() => Math.random() - 0.5);
// }

// function shuffle(nums) {
//   let newArr = nums.map((item) => ({ val: item, ram: Math.random() }));
//   newArr.sort((a, b) => a.ram - b.ram);
//   nums.splice(0, nums.length, ...newArr.map((i) => i.val));
//   return nums;
// }

function shuffle(nums) {
  let m = nums.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [nums[m], nums[index]] = [nums[index], nums[m]];
  }
  return nums;
}

test_shuffle(shuffle);
