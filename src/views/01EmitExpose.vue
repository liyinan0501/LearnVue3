<template>
  <div>
    <h3>Son1 Component</h3>
    <button @click="sendInfo">Send</button>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineExpose } from "vue";
let info = "The info from son component";
let exposeInfo = "The exposeInfo from som component";
const emit = defineEmits(["on-click"]);

function sendInfo() {
  emit("on-click", info, true);
}

defineExpose({
  exposeInfo,
});
</script>
