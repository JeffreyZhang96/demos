try {
  let name = 'jartto';
  console.log(nam);
} catch (e) {
  console.log('捕获到异常：', e);
}

try {
  setTimeout(() => {
    undefined.map((v) => v);
  }, 1000);
} catch (e) {
  console.log('捕获到异常：', e);
}
