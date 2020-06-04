function List() {
  let Node = function (val) {
    this.val = val;
    this.next = null;
  };
  let head = null;
  let length = 0;
  this.getList = function () {
    return head;
  };
  this.search = function (val) {
    let p = head;
    while (p) {
      if (p.val === val) {
        return true;
      }
      p = p.next;
    }
    return false;
  };
  this.append = function (val) {
    let node = new Node(val);
    let p = head;
    if (!head) {
      head = node;
    } else {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    }
    length += 1;
  };
  this.insert = function (pos, val) {
    if (pos >= 0 && pos <= length) {
      let node = new Node(val);
      let p = head;
      let index = 0;
      if (pos === 0) {
        node.next = p;
        head = node;
        length++;
      } else {
        while (p) {
          if (pos === ++index) {
            p.next = node;
            node.next = p.next.next;
            length++;
            return true;
          } else {
            p = p.next;
          }
        }
        return false;
      }
    }
    return false;
  };
  this.remove = function (val) {
    let p = head;
    let prev = head;
    while (p) {
      if (p.val === val) {
        p = p.next;
        prev.next = p;
        return true;
      }
      prev = p;
      p = p.next;
    }
    return false;
  };
  this.isEmpty = function () {};
  this.size = function () {};
}

let list = new List();
// for (let i = 0; i < 5; i += 1) {
//   list.append(i);
// }

console.log(list);

list.insert(0, 0);
list.insert(0, 1);
list.insert(0, 2);

console.log(list.search(0));
console.log(list.search(1));
console.log(list.search(2));
console.log(list.search(3));
