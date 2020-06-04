const prototype = {
  getName() {
    return this.first + ' ' + this.last;
  },
  say() {
    console.log('hello');
  },
};

let x = Object.create(prototype);
x.first = 'Jeffrey';
x.last = 'Zhang';
x.say();
console.log(x.getName());

let y = Object.create(prototype);
y.first = 'Jenny';
y.last = 'Chen';
y.say();
console.log(y.getName());
