<template lang="">
  <div>
    <h3>06 Watch</h3>
    <div>
      <h3>1. watch one varibales</h3>
      <p>
        Current Age {{ ageRef }} <br />
        Birthday: <input type="text" v-model.lazy="bir" />
      </p>
      <h3>2. watch multiple varibales</h3>
      <p>Name: {{ fullName }}</p>
      <input type="text" v-model.lazy="firstName" /> +
      <input type="text" v-model.lazy="lastName" />
    </div>
    <hr />
    <div>
      <h3>3. watch reactive variables</h3>
      {{ film }}
      <p>Movie: {{ movie }}</p>
      <p>Ticket:</p>
      <input type="text" v-model.lazy="movie.title" />
      <input type="text" v-model.lazy="movie.price" />
    </div>
    <div>
      <h3>4. watch one attribute from reactive variable</h3>
      <p>Student: <input type="text" v-model.lazy="student.name" /></p>
      <p>{{ student }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, UnwrapNestedRefs } from "vue";
// 1. watch one variable (ref).
let bir = ref("2015-5-20");
let ageRef = ref(0);
watch(
  bir,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    ageRef.value = new Date().getFullYear() - new Date(bir.value).getFullYear();
  },
  { immediate: true }
);

// 2. watch multiple variables (ref).
let firstName = ref("Jack");
let lastName = ref("Jones");
let fullName = ref("");

watch(
  [firstName, lastName],
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    fullName.value = newValue[0] + newValue[1];
  },
  { immediate: true }
);

// 3. watch reactive variable
// 无法正确监听 oldValue
// 默认开启深度监听
let movie = reactive({
  title: "The Rock",
  price: 48,
});
interface IMovie {
  title: string;
  price: number;
}
let film: IMovie = reactive({ title: "", price: 0 });
watch(
  movie,
  (newValue, oldValue) => {
    // console.log(newValue, oldValue);
    film.title = newValue.title;
    film.price = newValue.price;
  }
  // { immediate: true }
);

// function reactiveFun<T extends object>(target: T) {
//   const state = reactive(target) as UnwrapNestedRefs<T>;
//   return state;
// }

// 4 watch one attribute from reactive variable
let student = reactive({
  name: "Jooh",
  age: 12,
});
watch(
  () => student.name,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);
</script>
<style lang=""></style>
