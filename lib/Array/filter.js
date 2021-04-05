Array.prototype.myFilter = function (fn) {
  let result = [];
  for (let i of this) {
    fn(i) && result.push(i);
  }
  return result;
};

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
console.log(words.myFilter((word) => word.length > 6));
console.log(words.filter((word) => word.length > 6));

function isBigEnough(element) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].myFilter(isBigEnough));
console.log([12, 5, 8, 130, 44].filter(isBigEnough));
