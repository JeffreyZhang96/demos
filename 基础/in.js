Object.prototype.bar = 1;
var foo = {
  goo: undefined,
};

console.log(foo.bar);
console.log('bar' in foo);

console.log(foo.hasOwnProperty('bar'));
console.log(foo.hasOwnProperty('goo'));
