<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :name="name" class="green"/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

let name = "Mark";
</script>
