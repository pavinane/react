import { observable, action } from "mobx";

const TodoStore = observable({
  valueOne: "",

  get Text() {
    return this.valueOne;
  },

  dis: action((valueOne) => {
    TodoStore.valueOne = valueOne;
  }),
});

export default TodoStore;
