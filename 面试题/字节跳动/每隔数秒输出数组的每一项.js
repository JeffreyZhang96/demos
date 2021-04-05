let arr = ['一', '二', '三', '四'];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 1000 * i);
// }

// let i = 0;
// let timer = setInterval(() => {
//   console.log(arr[i++]);
//   if (i === arr.length) {
//     clearInterval(timer);
//   }
// }, 1000);

// let i = 0;
// let print = function () {
//   if (i < arr.length) {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(arr[i]);
//         resolve();
//       }, 1000);
//     }).then(() => {
//       i++;
//       print(i);
//     });
//   }
// };
// print();

// let i = 0;
// async function testAwait() {
//   if (i < arr.length) {
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(arr[i]);
//         resolve();
//       }, 1000);
//     });
//     i++;
//     testAwait(i);
//   }
// }
// testAwait();

for (let i = 0; i < arr.length; i++) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr[i]);
    }, i * 1000);
  }).then((data) => console.log(data));
}
