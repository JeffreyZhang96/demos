/*一般来说是不建议使用setInterval的，
如内部函数复杂就不能保证一定在规定时间内自动执行。
一般是通过setTimeout模仿setInterval。
那为什么要实现setInterval？
因为它内部的实现是使用requestAnimationFrame实现的，
该方法自带函数节流。
如有持续的动画需要执行，
基本会保证在16.6毫秒内执行一次，
提高动画性能并延时也是精确的。*/

function mySetInterval(fn, delay) {
  let timer;
  const loop = (fn, delay) => {
    timer = setTimeout(() => {
      loop(fn, delay);
      fn(timer);
    }, delay);
  };
  loop(fn, delay);
}

mySetInterval((timer) => {
  console.log('test');
  // clearTimeout(timer);  取消定时器
}, 2000);

function mySetInterval2(fn, delay) {
  const now = Date.now;
  let startTime = now();
  const loop = () => {
    const timer = requestAnimationFrame(loop);
    if (now() - startTime >= delay) {
      startTime = now();
      fn.call(this, timer);
    }
  };
  loop();
}

mySetInterval((timer) => {
  console.log('a');
  // cancelAnimationFram(timer); 取消当前定时器
}, 2000);
