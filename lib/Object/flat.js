function objectFlat(obj) {
  let result = {};
  function recurse(obj, prop) {
    let type = Object.prototype.toString;
    if (type.call(obj) == '[object Object]') {
      if (JSON.stringify(obj) !== '{}') {
        for (let p in obj) {
          recurse(obj[p], prop ? prop + '.' + p : p);
        }
      } else {
        result[prop] = {};
      }
    } else if (type.call(obj) == '[object Array]') {
      let len = obj.length;
      if (len > 0) {
        obj.forEach((item, index) => {
          recurse(item, prop ? prop + '[' + index + ']' : index);
        });
      } else {
        result[prop] = [];
      }
    } else {
      result[prop] = obj;
    }
  }
  recurse(obj, '');
  return result;
}

console.log(
  objectFlat({ a: { b: { c: { d: 1, f: 1 } } }, aa: 2, c: [1, 2, { e: 5 }] })
);
