function Parent() {
  this.name = 'parent';
  this.sex = 'male';
}
Parent.prototype.getName = function () {
  return this.name;
};

function Child() {
  this.name = 'child';
}

Child.prototype = new Parent();

let child1 = new Child();

