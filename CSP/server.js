const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      const html = fs.readFileSync("index.html", "utf-8");
      res.writeHead(200, {
        "Content-type": "text/html",
        // "Content-Security-Policy": "default-src 'self';report-uri /report"
        "Content-Security-Policy": "default-src http: https:"
      });
      res.end(html);
    } else {
      res.writeHead(200, {
        "Content-type": "text/javascript"
      });
      res.end("console.log('zzf')");
    }
  })
  .listen(8888);
console.log("server ok");
