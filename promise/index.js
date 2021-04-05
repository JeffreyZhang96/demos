Promise.resolve()
  .then(() => {
    return new Error('error!!!');
  })
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((err) => {
    console.log('catch: ', err);
  });

const promise = Promise.resolve().then(() => {
  return promise;
});
promise.catch(console.err);

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

Promise.resolve('1')
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log('finally');
  });
Promise.resolve('2')
  .finally(() => {
    console.log('finally2');
    return '我是finally2返回的值';
  })
  .then((res) => {
    console.log('finally2后面的then函数', res);
  });

function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
  return p;
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then((res) => console.log('result: ', res))
  .catch((err) => console.log(err));

async function async1() {
  console.log('async1 start');
  await new Promise((resolve) => {
    console.log('promise1');
  });
  console.log('async1 success');
  return 'async1 end';
}
console.log('srcipt start');
async1().then((res) => console.log(res));
console.log('srcipt end');

async function testSometing() {
  console.log('执行testSometing');
  return 'testSometing';
}

async function testAsync() {
  console.log('执行testAsync');
  return Promise.resolve('hello async');
}

async function test() {
  console.log('test start...');
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}
test();
var promise = new Promise((resolve) => {
  console.log('promise start...');
  resolve('promise');
});
promise.then((val) => console.log(val));

console.log('test end...');
