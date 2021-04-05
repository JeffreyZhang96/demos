//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个
// class Scheduler {
//   add(promiseCreator) {}
//   // ...
// }
// const timeout = (time) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// const scheduler = new Scheduler();
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time)).then(() => console.log(order));
// };
// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');
// output: 2 3 1 4

class Scheduler {
  constructor() {
    this.queue = [];
    this.tasks = 0;
  }
  add(promiseCreator) {
    const p = new Promise((resolve) => {
      this.queue.push(() => {
        promiseCreator().then(() => {
          resolve();
          this.tasks--;
          this.next();
        });
      });
    });
    this.next();
    return p;
  }
  next() {
    while (this.queue.length && this.tasks < 2) {
      this.queue.shift()();
      this.tasks++;
    }
  }
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// output: 2 3 1 4
