Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
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
