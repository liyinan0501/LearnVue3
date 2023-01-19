<template>
  <div>
    <h3>Son2 Component</h3>
    <p>Movie: {{ title }}</p>
    <p>Price: {{ price }}</p>
    <p>Detail: {{ info }}<button @click="getInfo">Show</button></p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let title = "The Rock";
let price = 56;
let info = ref(
  "The Rock is a 1996 American action thriller film directed by Michael Bay,"
);

function getInfo() {
  info.value = `Movie name: ${title}, and price is ${price}, and detail is ${info.value}`;
  console.log(info);
}
</script>
