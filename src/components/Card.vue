<template>
  <div
    class="hello"
    :style="{
      backgroundColor: `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})`,
    }"
  >
    {{ `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})` }}
    <button @click="onClickDelete">X</button>
    <button @click="onClickEdit">e</button>
  </div>
</template>

<script lang="ts" setup>
import { Card } from "../models/Card";

const emits = defineEmits(["delete", "edit"])

interface iProps {
  card?: Card;
}

//const props = defineProps({ card: Card });
const props = withDefaults(defineProps<iProps>(), { card: new Card(0, 0, 0, 1) })

function onClickDelete() {
  emits("delete", props.card)
}
function onClickEdit() {
  // this.$emit("edit", this.card);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
