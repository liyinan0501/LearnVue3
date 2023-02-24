<template>
  <div>
    <hr />
    <h4 :style="{ color }">Grandson Component</h4>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
const color = inject("color");
</script>
<style></style>
