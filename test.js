setTimeout(() => {
  console.log(4);
});

new Promise((resolve) => {
  resolve();
  console.log(1);
}).then(() => {
  console.log(3);
});

console.log(2);
