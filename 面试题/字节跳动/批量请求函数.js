function muiltiRequest(urls, maxNum) {
  return new Promise((resolve, reject) => {
    let cur = 0,
      finished = 0,
      res = [],
      urlsArr = [...urls];
    function add() {
      if (urlsArr.length && cur < maxNum) {
        cur++;
        let url = urlsArr.shift();
        fetch(url)
          .then((data) => {
            res[urls.indexOf(url)] = data;
            finished++;
            if (finished === urls.length) {
              resolve(res);
            }
            cur--;
            if (cur < maxNum) {
              add();
            }
          })
          .catch((err) => {
            reject(err);
          });
        add();
      }
    }
    add();
  });
}
