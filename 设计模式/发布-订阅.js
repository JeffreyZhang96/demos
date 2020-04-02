class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  emit(eventName, ...args) {
    this.events[eventName] &&
      this.events[eventName].forEach(cb => cb.apply(this, args));
  }
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb != callback
      );
    }
  }
  once(eventName,callback){
    
  }
}
