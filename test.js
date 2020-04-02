class EventEmitter {
  constructor() {
    this.list = {};
  }

  on(name, fn, type = 1) {
    if (!this.list[name]) {
      this.list[name] = [];
    }
    this.list[name].push([fn, type]);
  }

  once(name, fn, type = 0) {
    this.on(name, fn, type);
  }

  emit(name, ...args) {
    let fns = this.list[name];
    if (!fns || fns.length === 0) return;
    fns.forEach((fn, index) => {
      fn[0].apply(this, args);
      if (fn[1] === 0) {
        fns.splice(index, 1);
      }
    });
  }

  remove(name, func) {
    let fns = this.list[name];
    if (!fns) {
      this.list[name] = [];
    }
    fns.forEach((fn, index) => {
      if (fn[0] === func) {
        fns.splice(index, 1);
      }
    });
  }
}

let bus = new EventEmitter();

bus.on("click", value => {
  console.log(value);
});

bus.emit("click", 111);
