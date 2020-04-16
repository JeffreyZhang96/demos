module.exports = {
  devServer: {
    proxy: {
      '/user': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/user': 'user.json',
        },
      },
      '/list': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/list': 'list.json',
        },
      },
      '/proxy': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/proxy': 'proxy.json',
        },
      },
    },
  },
};
