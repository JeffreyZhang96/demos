let getGlobal = function () {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  throw new Error('没有全局环境');
};

console.log(getGlobal());

//ES2020 globalThis

console.log(globalThis);
