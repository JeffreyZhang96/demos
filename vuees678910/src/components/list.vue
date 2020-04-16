<template>
  <ul>
    <li v-for="item in price" :key="item.name">{{item.name}}-{{item.addr}}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return { list: [] };
  },
  async mounted() {
    const {
      data: { list }
    } = await axios.get("/list");
    this.list = list;
  }
};
</script>
