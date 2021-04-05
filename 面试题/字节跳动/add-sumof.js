// add(2,3,4).sumOf()
// add(2)(3,4).sumOf()
// add(2)(3)(4).sumOf()
// add(2,3)(4).sumOf()

function add() {
  if (!add.nums) {
    add.nums = [];
  }
  add.nums.push(...arguments);
  return add;
}
add.sumOf = function () {
  let res = add.nums.reduce((acc, cur) => acc + cur);
  add.nums = null;
  return res;
};
console.log(add(2, 3, 4).sumOf());
console.log(add(2)(3, 4).sumOf());
console.log(add(2)(3)(4).sumOf());
console.log(add(2, 3)(4).sumOf());
