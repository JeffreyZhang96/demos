let max = Number.MAX_SAFE_INTEGER;
console.log(max);
console.log(++max);
console.log(++max);
let bigMax = BigInt(max);
console.log(bigMax);
console.log(++bigMax);
console.log(++bigMax);

console.log(1n === 1);
console.log(1n == 1);
