function instanceOf(left, right) {
  if (typeof left !== 'object') return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

console.log({ a: 1 } instanceof Object);
console.log(instanceOf({ a: 1 }, Object));

console.log(1 instanceof Number);
console.log(instanceOf(1, Number));

console.log('a' instanceof String);
console.log(instanceOf('a', String));
