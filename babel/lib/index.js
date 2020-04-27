"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

require("core-js/modules/web.timers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fn = function fn() {
  return 1;
};

console.log(fn());
var num = Math.pow(3, 2);
console.log(num);

var foo = function foo(a, b, c) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo();
var hasTwo = [1, 2, 3].includes(2);
console.log(hasTwo);
Promise.resolve()["finally"]();

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hi, my name is ".concat(this.name));
    }
  }, {
    key: "greetDelay",
    value: function greetDelay(time) {
      var _this = this;

      setTimeout(function () {
        console.log("Hi, my name is ".concat(_this.name));
      }, time);
    }
  }]);

  return Person;
}();