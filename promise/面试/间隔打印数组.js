//使用Promise实现每隔1秒输出1,2,3

const arr = [1, 2, 3];
arr.reduce(
  (p, x) =>
    p.then(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(console.log(x)), 1000)
        )
    ),
  Promise.resolve()
);
