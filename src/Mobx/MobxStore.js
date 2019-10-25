import { observable, action } from "mobx";

const counterStore = observable({
  count: 0,
  increment: action(() => {
    counterStore.count += 1;
  }),
  decrement: action(() => {
    counterStore.count -= 1;
  }),

  // /computed
  get countByThree() {
    return this.count * 3;
  },
  get countByFour() {
    return this.count * 4;
  },
});

export default counterStore;
