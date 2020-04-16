var user = (function () {
  var _name = "zzf",
    _age = 24;
  return {
    getUserInfo() {
      return _name + "-" + _age;
    },
  };
})();

console.log(user._name);
console.log(user.getUserInfo());
