import { reactive } from "vue";
export default function newState(state: any) {
  const params = reactive({
    item: {
      name: "Vue",
      age: 34,
    },
  });
  function addItem() {
    state.items.push(Object.assign({}, params.item));
    params.item.name = "";
    params.item.age = 0;
  }
  return { params, addItem };
}
