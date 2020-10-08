Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(args);
  delete context.fn;
  return result;
};

var obj = {
  name: 'objName',
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

consoleInfo.myApply(obj, ['man', 100]);
consoleInfo.apply(obj, ['woman', 120]);
