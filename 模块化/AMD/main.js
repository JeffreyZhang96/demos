// main.js
(function () {
  require.config({
    paths: {
      //映射: 模块标识名: 路径
      article: './modules/article', //此处不能写成article.js,会报错
      user: './modules/user',
      //   // 第三方库模块
      //   jquery: './libs/jquery-1.10.1', //注意：写成jQuery会报错
    },
  });
  require(['article'], function (alerter) {
    article.consoleMsg(alerter);
  });
})();
