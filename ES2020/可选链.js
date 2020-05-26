const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

console.log(adventurer.dog?.name);
//adventurer.dog?.name等价于adventurer.dog && adventurer.dog.name
console.log(adventurer.dog?.getName?.());

// 短路计算
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];
console.log(x); // 作为0的x将不会被递增，依旧输出0

//?.不能用来赋值
let object = {};
object?.property = 1;
