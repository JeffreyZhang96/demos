const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT",
      "Access-Control-Allow-Headers": "X-Test-Cors",
      "Access-Control-Allow-Max-Age": "20"
    });
    res.end("123");
  })
  .listen(8886);
console.log("serve ok");
