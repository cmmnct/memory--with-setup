<template>
  <Suspense>
    <template #default>
      <div class="home">
        <h1>Memory Baby</h1>
        <div @input="onInputSliders">
          <input type="range" min="0" max="255" v-model="currentCard.r">
        </div>
        {{ message }}
        <memorycard
          @delete="onClickDelete"
          @edit="onClickEdit"
          v-for="(cp, index) in cpArray"
          :key="index"
          :card="cp"
        ></memorycard>
      </div>
    </template>
    <template #fallback>
      <p>Loading....</p>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import memorycard from "../components/Card.vue";
import { Card } from "../models/Card";

let message = "Love is the message";
let cpArray = ref([] as Card[]);
let currentCard = new Card(0, 0, 0, 1);

axios
  .get<Card[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
  .then((response) => (cpArray.value = response.data))
  .catch((error) => console.log(error));

function onClickDelete(card: Card) {
  console.log(card);
  cpArray.value.splice(cpArray.value.indexOf(card), 1);
}
function onClickEdit(card: Card) {
  console.log("on click edit");
  currentCard = card;
}

function onInputSliders(){
console.log("input")
}
</script>
