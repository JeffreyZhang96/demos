const fs = require('fs');

setTimeout(() => {
  console.log('setTimeout1');
}, 0);
setImmediate(() => {
  console.log('setImmediate1');
});

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout2');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate2');
  });
});
