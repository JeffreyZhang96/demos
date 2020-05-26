function fn() {
  console.log(arguments);
  return arguments[0];
}

console.log(fn`hello`);

console.log(fn('hello'));
