function func() {
  var cnt = 0;
  return function () {
    console.log(cnt++);
  };
}
let fn = func();
fn();
fn();
fn();
fn();
fn();
fn();
fn();
