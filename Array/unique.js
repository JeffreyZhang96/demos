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

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
