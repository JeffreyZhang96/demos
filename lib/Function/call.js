Function.prototype.myCall = function (context) {
  //1. 若是传入的context是null或者undefined时指向window;
  context = context || window;
  //2.将调用的这个函数赋值到context中, 这样之后执行context.fn的时候, fn里的this就是指向context了
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

var obj = {
  name: 'objName',
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

consoleInfo.myCall(obj, 'man', 100);
consoleInfo.call(obj, 'woman', 120);
