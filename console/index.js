console.log('log');
console.info('info');
console.debug('debug');
console.warn('warn');
console.error('error');

console.log(document.body);
console.dir(document.body);
console.dirxml(document.body);

let person = { name: 'zzf', age: 24 };
console.log(person);
console.table(person);

console.group('基础');
console.log('HTML');
console.log('CSS');
console.log('JS');
console.groupEnd();
console.groupCollapsed('框架');
console.log('React');
console.log('Vue');
console.groupEnd();

function func() {
  console.count(`函数运行了`);
}
for (let i = 0; i < 5; i++) {
  func();
}

console.time(`计时`);
for (let i = 0; i < 10000; i++) {
  Object.create(null);
}
console.timeEnd(`计时`);

function func1() {
  func2();
}
function func2() {
  func3();
}
function func3() {
  func4();
}
function func4() {
  console.trace();
}
func1();    
