//T1 检验给定字符串是否符合括号匹配，除了普通的左右括号之外还有字符'.'，可以匹配左右括号或者空字符 lc678
var checkValidString = function (s) {
  let stack1 = [];
  let stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack1.push(i);
    } else if (s[i] === '*') {
      stack2.push(i);
    } else {
      if (stack1.length) {
        stack1.pop();
      } else if (stack2.length) {
        stack2.pop();
      } else {
        return false;
      }
    }
  }
  while (stack1.length && stack2.length) {
    if (stack1.pop() > stack2.pop()) return false;
  }
  return !stack1.length;
};

//T2 给出整数数组[p1,p2,...,pn]和整数m，在数组中取数使和为m，可以多次取同一个数，求取数最少的次数
//0-1背包问题

function solution(harmList, totalHarm) {
  let arr = new Array(totalHarm + 1).fill(99999);
  arr[0] = 0;
  for (let i = 0; i < harmList.length; i++) {
    if (harmList[i] <= totalHarm) {
      arr[harmList[i]] = 1;
    }
  }
  for (let i = 1; i <= totalHarm; ++i) {
    for (let j = 0; j < harmList.length; j++) {
      if (harmList[j] <= i) {
        arr[i] = Math.min(arr[i], arr[i - harmList[j]] + 1);
      }
    }
  }
  return arr[totalHarm];
}
console.log(solution([1, 3], 5));

//T4 每个人手中有N张牌，规则是每回合出一张牌，面值大者获胜得3分，平局得1分，输了得0分。给出A的出牌顺序和面值以及B的手牌面值，求B能得到的最高分数
function solution(tangCards, wangCards) {
  tangCards = tangCards.sort((a, b) => a - b);
  wangCards = wangCards.sort((a, b) => a - b);
  let pt1 = 0;
  let pt2 = 0;
  let sum = 0;
  while (pt1 < tangCards.length) {
    if (tangCards[pt1] > wangCards[pt2]) {
      pt2++;
      sum += 3;
    }
    pt1++;
  }
  return sum;
}
console.log(solution([12, 24, 8, 32], [13, 25, 32, 11]));
