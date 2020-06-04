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

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// Array.prototype.unique = function () {
//   const map = new Map();
//   return this.filter((item) => !map.has(item) && map.set(item, 1));
// };

// Array.prototype.unique = function () {
//   const res = [];
//   let length = this.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (this[i] === this[j]) {
//         j = ++i;
//       }
//     }
//     res.push(this[i]);
//   }
//   return res;
// };

// Array.prototype.unique = function () {
//   const res = [];
//   return this.filter((item) => !res.includes(item) && res.push(item));
// };

Array.prototype.unique = function () {
  const res = [];
  return this.filter((item) => res.indexOf(item) === -1 && res.push(item));
};

console.log(arr.unique());
