const express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];
app.use((req, res, next) => {
  let origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'name');
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    res.setHeader('Access-Control-Max-age', 6);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'name');
    if (req.method === 'OPTIONS') {
      res.end();
    }
  }
  next();
});
app.put('/getData', (req, res) => {
  console.log(req.headers);
  res.setHeader('name', 'jeffrey');
  res.end('success');
});
app.get('/getData', (req, res) => {
  console.log(req.headers);
  res.end('success');
});
app.use(express.static(__dirname));
app.listen(4000);
