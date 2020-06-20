const uniq = require('uniq');

const module1 = require('./modules/module1');
const module2 = require('./modules/module2');
const module3 = require('./modules/module3');

module1.foo();
module2();

module3.foo();
module3.bar();

console.log()
