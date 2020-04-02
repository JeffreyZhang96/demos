<template>
  <div>
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from "./components/Addititon.vue";
import Subtraction from "./components/Subtraction.vue";
export default {
  data() {
    return {};
  },
  components: {
    "my-addition": Addition,
    "my-subtraction": Subtraction
  }
};
</script>

