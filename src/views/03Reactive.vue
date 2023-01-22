<template>
  <div>
    <h3>Son3 Component</h3>
    <p><input type="text" v-model="params.item.name" /></p>
    <p><input type="text" v-model="params.item.age" /></p>
    <p><button @click="addItem">ADD</button></p>
    <ul>
      <li
        v-for="(item, index) in state.items"
        :key="index"
        @click="removeItem(index)"
      >
        {{ index + 1 }} --- Name: {{ item.name }} -- Age: {{ item.age }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
// import { reactive } from "vue";
// let list = reactive({
//   items: [
//     {
//       name: "jack",
//       age: 28,
//     },
//     {
//       name: "luis",
//       age: 18,
//     },
//     {
//       name: "Hansa",
//       age: 22,
//     },
//   ],
// });
// let params = reactive({ item: { name: "example", age: 11 } });
// function addItem() {
//   list.items.push(Object.assign({}, params.item));
//   params.item.name = "";
//   params.item.age = 0;
// }
// function removeItem(i: number) {
//   list.items = list.items.filter((el, index) => index !== i);
// }

// let { state, removeItem } = originData();
// let { params, addItem } = addState(state);

// function originData() {
//   let state = reactive({
//     items: [
//       {
//         name: "jack",
//         age: 28,
//       },
//       {
//         name: "luis",
//         age: 18,
//       },
//       {
//         name: "Hansa",
//         age: 22,
//       },
//     ],
//   });
//   // remove
//   function removeItem(i: number) {
//     state.items = state.items.filter((el, index) => index !== i);
//   }
//   return {
//     state,
//     removeItem,
//   };
// }
// // add
// function addState(state) {
//   let params = reactive({
//     item: {
//       name: "Vue",
//       age: 34,
//     },
//   });
//   function addItem() {
//     state.items.push(Object.assign({}, params.item));
//     params.item.name = "";
//     params.item.age = 0;
//   }
//   return { params, addItem };
// }
import originData from "../hooks/del";
import newState from "../hooks/add";
let { state, removeItem } = originData();
let { params, addItem } = newState(state);
</script>
