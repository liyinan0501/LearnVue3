<template>
  <div>
    <h3>06 V-bind</h3>
    <p tag="title"></p>
    <img v-bind:src="image" alt="" />
    <a :href="url">Google</a>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const image = ref(require("../assets/logo.png"));
const url = ref("http://www.google.com");
</script>
<style></style>
