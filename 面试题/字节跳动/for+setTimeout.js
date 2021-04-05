for (var i = 0; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 6; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

for (var i = 0; i < 6; i++) {
  setTimeout(
    function (j) {
      console.log(j);
    },
    1000,
    i
  );
}
