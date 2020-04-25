<template>
  <div id="app">
    <!-- <h3>当前最新的count的值为:{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="sub">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(3)">-N Async</button>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters} from "vuex";
export default {
  data() {
    return {};
  },
  computed:{
      ...mapState(["count"]),
      ...mapGetters(["showNum"])
  },
  methods:{
      ...mapMutations(["sub","subN"]),
      ...mapActions(["subAsync","subNAsync"])
  }
};
</script>

