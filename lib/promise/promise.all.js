Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    promises = Array.from(promises);
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 2000);
}).then((result) => result);

const p2 = new Promise((resolve, reject) => {
  resolve('world');
}).then((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   reject('world');
// }).then((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   reject('world');
// }).catch((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// }).then((result) => result);

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
