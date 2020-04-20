// user.js文件
// 定义没有依赖的模块
define(function () {
  let author = 'jeffrey';
  function getAuthor() {
    return author.toUpperCase();
  }
  return { getAuthor }; // 暴露模块
});
