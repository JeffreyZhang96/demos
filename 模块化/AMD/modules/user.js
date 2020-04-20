//article.js文件
// 定义有依赖的模块
define(['user'], function (user) {
  let name = 'THE LAST TIME';
  function consoleMsg() {
    console.log(`${name} by ${user.getAuthor()}`);
  }
  // 暴露模块
  return { consoleMsg };
});
