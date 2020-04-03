Function.prototype.myApply = function(context) {
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

var obj = {
  name: "objName"
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

consoleInfo.myApply(obj, ["man", 100]);
consoleInfo.apply(obj, ["woman", 120]);
