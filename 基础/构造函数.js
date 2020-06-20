function Person() {
  getAge = function () {
    console.log(10);
  };
  return this;
}

Person.getAge = function () {
  console.log(20);
};

Person.prototype.getAge = function () {
  console.log(30);
};

var getAge = function () {
  console.log(40);
};

function getAge() {
  console.log(50);
}

Person.getAge();
getAge();
Person().getAge();
new Person.getAge();
getAge();
new Person().getAge();
