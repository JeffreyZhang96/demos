async function call() {
  return 1;
}
async function fn() {
  let a = call();
  let b = await call();
  console.log(a, b);
}
fn();
