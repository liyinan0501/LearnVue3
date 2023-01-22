import { reactive } from "vue";
export default function originData() {
  const state = reactive({
    items: [
      {
        name: "jack",
        age: 28,
      },
      {
        name: "luis",
        age: 18,
      },
      {
        name: "Hansa",
        age: 22,
      },
    ],
  });
  // remove
  function removeItem(i: number) {
    state.items = state.items.filter((el, index) => index !== i);
  }
  return {
    state,
    removeItem,
  };
}
