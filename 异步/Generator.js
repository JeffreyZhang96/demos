const fs = require('fs');
const path = require('path');

function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
  return promise;
}

function* readFileData() {
  const aData = yield getFileContent('a.json');
  console.log('a data', aData);
  const bData = yield getFileContent(aData.next);
  console.log('b data', bData);
  const cData = yield getFileContent(bData.next);
  console.log('c data', cData);
}

let result = readFileData();
result.next().value.then((data) => {
  result.next(data).value.then((data) => {
    result.next(data).value.then((data) => {
      result.next(data);
    });
  });
});
