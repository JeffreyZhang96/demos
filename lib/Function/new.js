function _new() {
  // 1. 获取构造函数，并且删除 arguments 中的第一项
  let constructor = [].shift.call(arguments);
  // 2. 创建一个空的对象并链接到构造函数的原型，使它能访问原型中的属性
  let obj = Object.create(constructor.prototype);
  // 3. 使用apply改变构造函数中this的指向实现继承，使obj能访问到构造函数中的属性
  let result = constructor.apply(obj, arguments);
  // 4. 优先返回构造函数返回的对象
  return result instanceof Object ? result : obj;
}

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.eat = function () {
  console.log('Eatting');
};

let Jeffrey = _new(Person, 'Jeffrey', 'male');
console.log(Jeffrey);
Jeffrey.eat();

let Jenny = new Person('Jenny', 'female');
console.log(Jenny);
Jenny.eat();
