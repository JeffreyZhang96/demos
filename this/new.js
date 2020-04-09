function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}
Person.prototype.eat = function() {
  console.log("Eatting");
};
function _new() {
  let constructor = [].shift.call(arguments);
  let obj = Object.create(constructor.prototype);
  let result = constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj; 
}

let Jeffrey = _new(Person, "Jeffrey", "male");
console.log(Jeffrey);
Jeffrey.eat();

let Jenny = new Person("Jenny", "female");
console.log(Jenny);
Jenny.eat();
