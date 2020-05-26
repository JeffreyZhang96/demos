class Cat {
  #name = 'tom';

  getName() {
    console.log(this.#name);
  }
}

const cat = new Cat();

console.log(cat.getName());
console.log(cat.#name);

class Pig extends Cat {}
const pig = new Pig();
console.log(pig.getName());
console.log(pig.#name);
