const isType = type => obj =>
  Object.prototype.toString.call(obj) === `[object ${type}]`;

console.log(isType("String")("123"));
console.log(isType("String")(123));
