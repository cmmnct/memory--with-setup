/* eslint-disable no-undef */
<template>
  <div class="hello">
    <h1 v-bind="attrs">{{ props.msg }}, {{ props.name }}</h1>
    <h2 v-bind="$slots">More soon.....</h2>
  </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false
  };
</script>

<script lang="ts" setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
const props = defineProps({ name: String, msg: String });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.green {
  background-color: #42b983;
}
</style>
