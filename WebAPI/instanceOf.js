function instanceOf(left, right) {
  if (typeof left !== "object") return false;
  let leftValue = left.__proto__;
  let rightValue = right.prototype;
  while (true) {
    if (leftValue === null) {
      return false;
    }
    if (leftValue === rightValue) {
      return true;
    }
    leftValue = leftValue.__proto__;
  }
}

console.log({ a: 1 } instanceof Object);
console.log(instanceOf({ a: 1 }, Object));

console.log(1 instanceof Number);
console.log(instanceOf(1, Number));

console.log("a" instanceof String);
console.log(instanceOf("a", String));
