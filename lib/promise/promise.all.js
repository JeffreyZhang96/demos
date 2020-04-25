Promise.all = function (promiseArr) {
  if (!Array.isArray(promiseArr)) {
    return reject(new TypeError('arguments must be an array'));
  }
  let resArr = [],
    count = 0,
    len = promiseArr.length;
  return new Promise(function (resolve, reject) {
    for (let promise of promiseArr) {
      // 数组传进来的项可能不是一个Promise实例，使用Promise.resolve方法转换
      Promise.resolve(promise).then(
        (res) => {
          resArr[count] = res;
          count++;
          if (count === len) {
            return resolve(resArr);
          }
        },
        (err) => reject(err)
      );
    }
  });
};

Promise.all = async (arr) => {
  const res = [];
  for (let promise of arr) {
    res.push(await promise);
  }
  return await res;
};
promiseQueue([p1, p2, p3]).then((res) => {
  console.log(res);
}); // [1,2,3]

const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then((result) => result);

const p2 = new Promise((resolve, reject) => {
  resolve('world');
}).then((result) => result);

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then((result) => result);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// }).then((result) => result);

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));
