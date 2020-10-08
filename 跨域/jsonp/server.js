const express = require('express');
let app = express();
app.get('/say', (req, res) => {
  let { wd, cb } = req.query;
  res.end(`${cb}({
    q: '1',
    p: false,
    s: [
      '1688黄页网',
      '1公顷等于多少平方米',
      '122',
      '1吨等于多少千克',
      '192.168.1.1 登陆入口',
      '1平方千米=多少平方米',
      '1分米等于多少厘米',
      '1米等于多少分米',
      '192.168.1.1',
      '1米等于多少厘米',
    ],
  })`);
});
app.listen(3000);
