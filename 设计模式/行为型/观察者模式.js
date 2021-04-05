class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  removeSub(sub) {
    this.subs.forEach((item, index) => {
      if (item === sub) {
        this.subs.splice(index, 1);
      }
    });
  }
  notify(obj) {
    this.subs.forEach((item) => {
      item.update(obj);
    });
  }
}
class Watcher {
  update(obj) {
    console.log(obj);
  }
}

let dep = new Dep();
let watcher1 = new Watcher();
let watcher2 = new Watcher();

dep.addSub(watcher1);
dep.addSub(watcher2);
dep.notify('gg');
dep.removeSub(watcher1);
dep.notify('gl');
