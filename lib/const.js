function _const(key, value) {
  window[key] = value;
  Object.defineProperty(window, key, {
    enumerable: false,
    configurable: false,
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (newValue !== value) {
        throw TypeError('只读变量，不可修改');
      } else {
        return value;
      }
    },
  });
}
