<template>
  <h3>Son5 Component</h3>
  <table border="1" cellpadding="0" cellspacing="0">
    <tr>
      <th><input type="checkbox" v-model="isAllChecked" />All</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Product Amount</th>
    </tr>
    <tr v-for="item in iceCream" :key="item.id">
      <td><input type="checkbox" v-model="item.ischecked" /></td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.num }}</td>
    </tr>
    <tr>
      <td>total:</td>
      <td colspan="3">{{ total }}</td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
let { iceCream } = reactive({
  iceCream: [
    { id: 101, name: "Fazer", price: 3.2, num: 15, ischecked: true },
    { id: 102, name: "DQ", price: 3.3, num: 28, ischecked: false },
    { id: 102, name: "Spay", price: 3.1, num: 3, ischecked: false },
  ],
});

let isAllChecked = computed({
  get() {
    return iceCream.every((el) => el.ischecked);
  },
  set(value) {
    iceCream.forEach((el) => (el.ischecked = value));
  },
});

let total = computed(() => {
  return iceCream.reduce((cur, val) => {
    if (val.ischecked) {
      return cur + val.num * val.price;
    } else {
      return cur;
    }
  }, 0);
});
</script>
<style lang="scss" scoped>
table {
  width: 500px;
  margin: 0 auto;
  td {
    text-align: center;
  }
}
</style>
