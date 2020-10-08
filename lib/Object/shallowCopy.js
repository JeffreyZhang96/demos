let obj = {
  number: 1,
  string: 'abc',
  object: {
    boolean: true,
  },
  symbol: Symbol('symbol'),
};
Object.defineProperty(obj, 'define', {
  value: 'non-enumerable',
  enumerable: false,
});

// let target = {};
// let returnTarget = Object.assign(target, obj);
// console.log(returnTarget === target);

let target = { ...obj };

obj.number = 2;
obj.string = 'efg';
obj.object.boolean = false;

// target.number = 2;
// target.string = "efg";
// target.object.boolean = false;

console.log(obj);
console.log(target);
