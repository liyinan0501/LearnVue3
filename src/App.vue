<template>
  <div>
    <div>Father Component:</div>
    <div>{{ msg }}</div>
    <button @click="handleClick">get expose</button>
    <div>------------------------------------------</div>
    <SonPageOne ref="helloword" @on-click="receive"></SonPageOne>
    <div>------------------------------------------</div>
    <SonPageTwo></SonPageTwo>
    <div>------------------------------------------</div>
    <input type="text" placeholder="username" v-model="params.username" />
    <input type="passwrod" placeholder="password" v-model="params.password" />
    <button @click="doLogin">Login</button>
    {{ params.username }}
    {{ params.password }}
    <div>------------------------------------------</div>
    <p>Product name: {{ iceCream.name }}</p>
    <p>Product price: {{ iceCream.price }}</p>
    <div>------------------------------------------</div>
    <SonPageThree></SonPageThree>
    <div>------------------------------------------</div>
    <SonPageFour></SonPageFour>
    <div>------------------------------------------</div>
    <SonPageFive></SonPageFive>
    <div>------------------------------------------</div>
  </div>
</template>

<script lang="ts" setup>
import SonPageOne from "./views/SonPageOne.vue";
import SonPageTwo from "./views/02Ref.vue";
import SonPageThree from "./views/03Reactive.vue";
import SonPageFour from "./views/04Proxy.vue";
import SonPageFive from "./views/05Computed.vue";
import { ref, getCurrentInstance, reactive } from "vue";
const msg = ref("");
const helloword = ref();
const params = ref({
  username: "",
  password: "",
});
// 获取全局对象
const { proxy } = getCurrentInstance();
// console.log(proxy.fool);
// console.log(proxy.$axios);

// 处理对象尽量要用reactive
const iceCream = reactive({
  name: "Fazer",
  price: 10,
});
console.log(iceCream);

function doLogin() {
  proxy.$axios
    .post("test/user/doLogin", params.value)
    .then((res) => console.log(res));
}

function receive(info: string) {
  msg.value = info;
}

// const instance = getCurrentInstance()

function handleClick() {
  console.log(helloword.value.exposeInfo);
}
</script>
