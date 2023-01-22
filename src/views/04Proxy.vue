<template>
  <div>Son4 Component</div>
  <div>{{ proxy }}</div>
  <button @click="change">Change</button>
</template>
<script setup lang="ts">
// import { reactive } from "vue";
let person = {
  name: "jack",
  age: 20,
};
// let proxy = reactive(
//   new Proxy(person, {
//     get(target, attr) {
//       // console.log("GET triggered");
//       return target[attr];
//     },
//     set(target, attr, value) {
//       console.log("SET triggered");
//       // target[attr] = value;
//       return Reflect.set(target, attr, value);
//     },
//   })
// );
let proxy = new Proxy(person, {
  get(target, attr) {
    // console.log("GET triggered");
    // return target[attr];
    return Reflect.get(target, attr);
  },
  set(target, attr, value) {
    console.log("SET triggered");
    // target[attr] = value;
    return Reflect.set(target, attr, value);
  },
});
function change() {
  proxy.name = "rose";
  console.log(proxy);
}
</script>
<style></style>
