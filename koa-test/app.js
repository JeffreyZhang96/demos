const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  console.log('1st layer onion - Start');
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log('1st layer onion - End');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  console.log('2nd layer onion - Start');
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log('2nd layer onion - End');
});

// response
app.use(async (ctx) => {
  console.log('3rd layer onion - Start');
  ctx.body = 'Hello World';
  console.log('3rd layer onion - End');
});
app.listen(8000);
