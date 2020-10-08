Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};

const p1 = new Promise((resolve) => setTimeout(resolve, 100, 'Hello'));
const p2 = new Promise((resolve) => setTimeout(resolve, 120, 'Goodbye'));
const p3 = new Promise((resolve, reject) => setTimeout(reject, 10, 'Oops'));

Promise.race([p1, p2, p3])
  .then((result) => console.log(result))
  .catch(() => console.log('Something went wrong...'));
