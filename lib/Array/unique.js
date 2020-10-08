const arr = [
  1,
  1,
  '1',
  '1',
  0,
  0,
  '0',
  '0',
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  {},
  {},
  [],
  [],
  /a/,
  /a/,
];

// //Set
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// //Map
// Array.prototype.unique = function () {
//   const map = new Map();
//   return this.filter((item) => !map.has(item) && map.set(item, 1));
// };

// Array.prototype.unique = function () {
//   const res = [];
//   return this.filter((item) => !res.includes(item) && res.push(item));
// };

// //filter
// Array.prototype.unique = function () {
//   return this.filter((item, index) => this.indexOf(item) === index);
// };

// // //reduce
// Array.prototype.unique = function () {
//   return this.reduce(
//     (pre, cur) => (pre.includes(cur) ? pre : [...pre, cur]),
//     []
//   );
// };

// //Object键值对
// Array.prototype.unique = function () {
//   let obj = {};
//   return this.filter((item) => {
//     return obj.hasOwnProperty(typeof item + item)
//       ? false
//       : (obj[typeof item + item] = true);
//   });
// };

console.log(arr.unique());
