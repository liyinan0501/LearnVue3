<template>
  <div>
    <div>Father Component:</div>
    <div>{{ msg }}</div>
    <button @click="handleClick">get expose</button>
    <div>------------------------------------------</div>
    <NewPage ref="helloword" @on-click="receive"></NewPage>
  </div>
</template>

<script lang="ts" setup>
import NewPage from "./views/NewPage.vue";
import { ref } from "vue";
const msg = ref("");
const helloword = ref();

function receive(info: string) {
  msg.value = info;
}

// const instance = getCurrentInstance()

function handleClick() {
  console.log(helloword.value.exposeInfo);
}
</script>
