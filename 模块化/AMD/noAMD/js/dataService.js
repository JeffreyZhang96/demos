(function (window) {
  let name = 'dataServer.js';
  function getName() {
    return name;
  }
  window.dataServer = { getName };
})(window);
