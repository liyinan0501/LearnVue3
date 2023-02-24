<template>
  <div>
    <h3>09 provide and inject</h3>
    <p>Cuurent color: {{ color }}</p>
    <button @click="color = 'red'">Red</button>
    <button @click="color = 'yellow'">Yellow</button>
    <button @click="color = 'green'">Green</button>
    <SonComponent></SonComponent>
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from "vue";
import SonComponent from "../components/SonComponent.vue";
const color = ref("red");
provide("color", color);
</script>
<style></style>
