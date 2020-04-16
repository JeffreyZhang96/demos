<template>
  <div class="price">
    <ul>
      <li v-for="item in price" :key="item">{{item}}</li>
    </ul>
    <button @click="up">升序</button>
    <button @click="down">降序</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "proxy",
  data() {
    return { price: [], proxy: "" };
  },
  methods: {
    up() {
      this.price = this.proxy.up;
    },
    down() {
      this.price = this.proxy.down;
    },
    reset() {
      this.price = this.proxy.reset;
    }
  },
  async mounted() {
    const {
      data: { price }
    } = await axios.get("/proxy");
    Object.freeze(price);
    this.proxy = new Proxy(
      {},
      {
        get(target, key) {
          if (key === "up") {
            return [].concat(price).sort((a, b) => a - b);
          } else if (key === "down") {
            return [].concat(price).sort((a, b) => b - a);
          } else {
            return price;
          }
        },
        set() {
          return false;
        }
      }
    );
    this.price = this.proxy.default;
  }
};
</script>