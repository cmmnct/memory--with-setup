<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="getPokemon">Load Pokemon data</button>
  <div v-if="pokemon">
  <table>
    <tr v-for="(sprite,index) in pokemon" :key="index">
      <td><a :href="sprite"><img :src="sprite" alt=""></a></td>
    </tr>
  </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let pokemon = ref([]) as any;

async function getPokemon<iPoke>(){
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => response.json())
  .then(data => pokemon.value = data.sprites)
}

</script>
