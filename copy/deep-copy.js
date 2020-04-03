function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  //   for (let key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       result[key] = deepClone(obj[key]);
  //     }
  //   }
  Reflect.ownKeys(obj).forEach(key => {
    result[key] = deepClone(obj[key]);
  });
  return result;
}

let obj = {
  number: 1,
  string: "abc",
  object: {
    boolean: true
  },
  symbol: Symbol("symbol")
};
Object.defineProperty(obj, "define", {
  value: "non-enumerable",
  enumerable: false
});
let sym = Symbol("unique");
obj[sym] = "1";

let target = deepClone(obj);

console.log(obj);
console.log(target);
