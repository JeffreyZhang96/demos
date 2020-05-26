var fs = require("fs");
var path = require("path");

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList);
    } else if (fullPath.slice(fullPath.lastIndexOf(".")) === ".md") {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

var filesList = [];
readFileList(__dirname, filesList);
console.log(filesList);

for (let item of filesList) {
  let file = fs.readFileSync(item);
  let res = file.toString().replace(/(#{1,4})/g, function (match, a) {
    return a + "#";
  });
  fs.writeFileSync(item, res);
}
