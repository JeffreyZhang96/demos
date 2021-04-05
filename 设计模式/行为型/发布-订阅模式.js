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
      this.events[eventName].forEach((cb) => cb.apply(this, args));
  }
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb != callback
      );
    }
  }
}

function user1(content) {
  console.log('用户1订阅了:', content);
}

function user2(content) {
  console.log('用户2订阅了:', content);
}

let eventEmitter = new EventEmitter();

// 订阅
eventEmitter.on('article', user1);
eventEmitter.on('article', user2);

// 发布
eventEmitter.emit('article', '会员服务');
