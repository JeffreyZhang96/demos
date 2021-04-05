let a = [1, 2, 3];
let b = [4, 5, 6];

// for (let i of b) {
//   a.push(i);
// }

// console.log(a.concat(b));

// a.push.apply(a, b);

a.push(...b);

console.log(a);
