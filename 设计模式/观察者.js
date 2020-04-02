class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(index, 1);
      }
    });
  }
  notify(obj) {
    this.observers.forEach(item => {
      item.update(obj);
    });
  }
}
class Observer {
  update(obj) {
    console.log(obj);
  }
}

let subject = new Subject();
let observer1 = new Observer();
let observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify("gg");
subject.removeObserver(observer1);
subject.notify("gl");
