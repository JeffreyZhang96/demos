function Person(name) {
  return `hello ${name} ${this.name}`;
}

let person = {
  name: "zzf"
};

console.log(Person.bind(person)("zhang"));

Function.prototype.myBind = function(context) {
  let self = this;
  return function() {
    return self.apply(context, arguments);
  };
};

console.log(Person.myBind(person)("zhang"));
