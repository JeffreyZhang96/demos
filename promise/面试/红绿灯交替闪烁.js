function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function light(fn, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  });
}

function loop() {
  light(red, 3000)
    .then(() => {
      return light(green, 2000);
    })
    .then(() => {
      return light(yellow, 1000);
    })
    .then(() => {
      return loop();
    });
}

loop();
