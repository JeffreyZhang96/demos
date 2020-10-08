let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

// let result = Object.assign(target, source);

// let result = Object.assign({}, target, source);

let result = { ...target, ...source };

console.log(result);
