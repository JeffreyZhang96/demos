//juejin.im/post/6844903953751080967

Function.prototype.myBind = function (context, ...args) {
  let that = this;
  return function F() {
    if (this instanceof F) {
      return new that(...args, ...arguments);
    } else {
      return that.apply(context, args.concat(...arguments));
    }
  };
};

var obj = {
  name: 'objName',
};

function consoleInfo(sex, weight) {
  console.log(this.name, sex, weight);
}

// let Person = consoleInfo.myBind(obj, 'man');
// let man = new Person(100);

consoleInfo.myBind(obj, 'man')(100);
consoleInfo.bind(obj, 'woman')(120);

// var man = consoleInfo.myBind(obj, 'man');
// var obj1 = new man(100);

// var woman = consoleInfo.bind(obj, 'woman');
// var obj2 = new woman(120);
