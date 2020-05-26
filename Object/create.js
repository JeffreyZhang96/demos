Object.prototype.myCreate = function (obj) {
  function Fn() {}
  Fn.prototype = obj;
  return new Fn();
};

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.myCreate(person);

me.name = 'Jeffrey';
me.isHuman = true;
me.printIntroduction();
