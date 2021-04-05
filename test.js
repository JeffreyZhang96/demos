Function.prototype.myBind = function (context, ...args) {
  let that = this;
  return function F() {
    if (this instanceof F) {
      return new that(...args, ...arguments);
    } else {
      return that.apply(context, args.concat(...arguments));
    }
  };
};
