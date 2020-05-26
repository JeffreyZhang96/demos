function norepeat(arr) {
    
}

let arr = [
  false,
  false,
  true,
  true,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  0,
  0,
  1,
  1,
  { a: 1 },
  { a: 1 },
  { b: 1 },
  '1',
  '1',
];

console.log(norepeat(arr));
