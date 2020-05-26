const sleep = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('sleep finish!');
    }, timeout);
  });
};

Promise.allSettled([sleep(2000), Promise.reject(new Error('error'))]).then(
  (res) => {
    console.log('res', res);
  }
);
