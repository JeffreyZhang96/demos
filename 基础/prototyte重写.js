function A () {
}
A.prototype.n = 1;

var b = new A();

A.prototype = {
    n: 2,
    m: 3
}
var c = new A();

console.log(b.n, b.m);
console.log(c.n, c.m);
