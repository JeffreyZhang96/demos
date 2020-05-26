let reg = /^\w+.\w+$/;
let reg2 = /^\w+.\w+$/s;
let str = 'hello\nworld';

console.log(reg.test(str));
console.log(reg2.test(str));
