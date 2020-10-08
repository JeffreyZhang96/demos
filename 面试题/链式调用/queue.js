function Quene() {
  this.quene = [];
}

Quene.prototype.task = function (time, callback) {
  this.quene.push({ time, callback });
  return this;
};

Quene.prototype.start = function () {
  const queue = this.quene;

  async function fn() {
    for (let i = 0; i < queue.length; i++) {
      await new Promise((resolve, rejected) => {
        setTimeout(() => {
          resolve(queue[i].callback());
        }, queue[i].time);
      });
    }
  }
  fn();
};

// class Quene {
//   constructor() {
//     this.queue = [];
//   }
//   task(time, cb) {
//     this.queue.push({ time, cb });
//     return this;
//   }
//   start() {
//     let that = this;
//     async function fn() {
//       const queue = that.queue;
//       for (let i = 0; i < queue.length; i++) {
//         await new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve(queue[i].cb());
//           }, queue[i].time);
//         });
//       }
//     }
//     fn();
//   }
// }

//实现：
new Quene()
  .task(1000, () => {
    console.log(1);
  })
  .task(6000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
