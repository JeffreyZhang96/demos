//永远不相等
let s1 = Symbol('s1');
let s2 = Symbol('s2');
console.log(s1 === s2);

//Symbol属性不可枚举
let obj = {
  [s1]: 1,
  a: 2,
};
for (let key in obj) {
  console.log(obj[key]);
}
console.log(Object.getOwnPropertySymbols(obj));

// 通过Symbol来获取key值
let s3 = Symbol.for('s3');
let s4 = Symbol.for('s3');
console.log(s3 === s4);
console.log(Symbol.keyFor(s3));

let instance = {
  [Symbol.hasInstance](value) {
    return 'a' in value;
  },
};
console.log({ a: 3 } instanceof instance);

let arr = [1, 2, 3];
arr[Symbol.isConcatSpreadable] = false; // 拼接数组时不展开
console.log([].concat(arr, [1, 2, 3]));

// match split search方法
let obj1 = {
  [Symbol.match](value) {
    return value.length === 3;
  },
};
console.log('abc'.match(obj1));

//species 衍生对象
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
  // 强制修改一下
  static get [Symbol.species]() {
    return Array;
  }
}
let v = new MyArray(1, 2, 3);
let c = v.map((item) => (item *= 2)); // c是v的衍生对象
console.log(c instanceof MyArray);

// Symbol.toPrimitive
// 数据类型转化
let obj3 = {
  [Symbol.toPrimitive](type) {
    console.log(type);
    return 123;
  },
};
console.log(obj++);

// Symbol.toStringTag
let obj5 = {
  [Symbol.toStringTag]: 'xxxx',
};
console.log(Object.prototype.toString.call(obj5));
