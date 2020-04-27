var foo = function () {
  this.name = 'foo';
}.bind(window);

console.log(foo.name);
