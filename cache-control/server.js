const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      const html = fs.readFileSync("index.html", "utf-8");
      res.writeHead(200, {
        "Content-type": "text/html"
      });
      res.end(html);
    }
    if (req.url === "/hello.js") {
      const etag = req.headers["if-none-match"];
      if (etag === "777") {
        res.writeHead(304, {
          "Content-Type": "text/javascript",
          "Cache-Control": "max-age=30000000,no-cache",
          "Last-Modified": "123",
          Etag: "777"
        });
        res.end("123");
      }
      res.writeHead(200, {
        "Content-Type": "text/javascript",
        "Cache-Control": "max-age=30000000,no-store",
        "Last-Modified": "123",
        Etag: "777"
      });
      res.end('console.log("JeffreyZhang")');
    }
  })
  .listen(8888);
console.log("server ok");
