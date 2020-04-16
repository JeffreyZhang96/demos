Function.prototype.myCall = function(context) {
  context = context || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

var obj = {
  name: "objName"
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

consoleInfo.myCall(obj, "man", 100);
consoleInfo.call(obj, "woman", 120);
