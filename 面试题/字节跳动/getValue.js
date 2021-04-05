// const obj = {a: {b : {c : {d: 3}}}}
// function getValue(obj, str, defaultValue) {}
// getValue(obj, 'a.b.c.d', 1) => 3 (存在该属性返回该属性对应的值)
// getValue(obj, 'a.b.c.d.e', 1) => 1 (出现错误返回传入的默认值)
// const obj_1 = {a: {b : {c : {d: [{e : 4}]}}}}
// getValue(obj_1, 'a.b.c.d[0].e', 1) => 4

// function getValue(obj, str, defaultValue) {
//   let arr = str.split('.');
//   for (let i = 0; i < arr.length; i++) {
//     if (obj.hasOwnProperty(arr[i])) {
//       obj = obj[arr[i]];
//     } else {
//       return defaultValue;
//     }
//   }
//   return obj;
// }
// const obj = { a: { b: { c: { d: 3 } } } };
// console.log(getValue(obj, 'a.b.c.d', 1));

function getValue(obj, property, defaultValue) {
  let arr = property.split('.');
  let len = arr.length;
  let cur = obj;
  for (let i = 0; i < len; i++) {
    if (arr[i].indexOf('[') === -1) {
      if (cur[arr[i]]) {
        cur = cur[arr[i]];
      } else {
        return defaultValue;
      }
    } else {
      let key = arr[i].match(/(\w+)\[(\d+)\]/)[1];
      let index = arr[i].match(/(\w+)\[(\d+)\]/)[2];
      if (cur[key][index]) {
        cur = cur[key][index];
      } else {
        return defaultValue;
      }
    }
  }
  return cur;
}
const obj_1 = { a: { b: { c: { d: [{ e: 4 }] } } } };
console.log(getValue(obj_1, 'a.b.c.d[1].e', 1));
