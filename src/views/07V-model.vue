<template lang="">
  <div>
    <h3>07 V-model</h3>
    <div>Hobits {{ habits }}</div>
    <input type="checkbox" value="basketball" v-model="habits" />Basketball
    <input type="checkbox" value="volleyball" v-model="habits" />Volleyball
    <input type="checkbox" value="golf" v-model="habits" />Golf
    <input type="checkbox" value="swim" v-model="habits" />Swim
  </div>
  <div>
    select {{ colors }}
    <select v-model="colors">
      <option value="black">black</option>
      <option value="while">while</option>
      <option value="yellow">yellow</option>
      <option value="green">green</option>
    </select>
  </div>
  <div>
    <input type="text" v-model.number="num1" />+
    <input type="text" v-model.number="num2" />=<input
      type="text"
      :value="num1 + num2"
    />
    <p>{{ typeof num1 }}</p>
    <input type="text" v-model.lazy="mobile" />
    <!-- v-model.trim="" 去两边空格 -->
    <p>{{ mobile }}</p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const habits = ref([]);
const colors = ref("green");
const num1 = ref(0);
const num2 = ref(0);
const mobile = ref();
</script>
<style></style>
