(function (window, dataServer) {
  let name = 'alerter.js';
  function foo() {
    console.log(name, dataServer.getName());
  }
  window.alerter = foo;
})(window, dataServer);
