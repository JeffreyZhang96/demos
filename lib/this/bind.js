Function.prototype.myBind = function(context) {
  let self = this;
  let args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    } else {
      return self.apply(context, args.concat(...arguments));
    }
  };
};

var obj = {
  name: "objName"
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

consoleInfo.myBind(obj, "man")(100);
consoleInfo.bind(obj, "woman")(120);

var man = consoleInfo.myBind(obj, "man");
var obj1 = new man(100);

var woman = consoleInfo.bind(obj, "woman");
var obj2 = new woman(120);
