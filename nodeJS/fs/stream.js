// process.stdin.pipe(process.stdout);

const http = require("http");
const fs = require("fs");
const path = require("path");

// http
//   .createServer((req, res) => {
//     if (req.method === "POST") {
//       req.pipe(res);
//     }
//   })
//   .listen(8000);

// //复制文件
// var fileName1 = path.resolve(__dirname, "data1.txt");
// var fileName2 = path.resolve(__dirname, "data2.txt");
// var readStream = fs.createReadStream(fileName1);
// var writeStream = fs.createWriteStream(fileName2);
// readStream.pipe(writeStream);
// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
// readStream.on("end", function () {
//   console.log("拷贝完成");
// });

const fileName1 = path.resolve(__dirname, "data1.txt");
http
  .createServer((req, res) => {
    if (req.method === "GET") {
      const readStream = fs.createReadStream(fileName1);
      readStream.pipe(res);
    }
  })
  .listen(8000);
