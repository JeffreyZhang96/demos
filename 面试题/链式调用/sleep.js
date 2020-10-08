function chain() {
  const list = [];
  setTimeout(async () => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].type !== 'sleep') {
        list[i].fn();
      } else {
        await list[i].fn();
      }
    }
  }, 0);
  const obj = {
    eat: () => {
      list.push({
        type: 'eat',
        fn: () => {
          console.log('eat');
        },
      });
      return obj;
    },
    work: () => {
      list.push({
        type: 'work',
        fn: () => {
          console.log('work');
        },
      });
      return obj;
    },
    sleep: (time) => {
      list.push({
        type: 'sleep',
        fn: () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, time * 1000);
          }),
      });
      return obj;
    },
  };
  return obj;
}

//实现：
chain().eat().sleep(5).work().eat().work().sleep(10);
