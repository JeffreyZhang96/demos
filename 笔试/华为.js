function check(s, t) {
  let pt1 = 0;
  let pt2 = 0;
  let count = 0;
  let start = 0;
  let flag = false;
  while (pt2 < t.length) {
    let pt3 = pt1;
    while (pt3 < s.length) {
      if (s[pt3] == t[pt2]) {
        pt1 = pt3;
        if (flag == false) {
          start = pt1;
          flag = true;
        }
        count++;
        break;
      } else {
        if (count > 0 && pt3 - pt1 > 2) return [0, 0];
        pt3++;
      }
    }
    pt2++;
  }
  if (count >= Math.floor(t.length * 0.8)) {
    return [start, pt1];
  } else return [0, 0];
}

function output(s, t) {
  let len = 2 * Math.floor(t.length * 0.8) - 1;
  for (let i = 0; i < s.length; i++) {
    let temp = check(s.slice(i, Math.min(i + len, s.length)), t);
    console.log(temp);
    if (temp[0] == temp[1]) continue;
    let arr = s.split('');
    arr.splice(
      temp[0],
      temp[1] - temp[0] + 1,
      ...new Array(temp[1] - temp[0] + 1).fill('*')
    );
    s = arr.join('');
  }
  return s;
}

console.log(output('adcdedf', 'acef'));
