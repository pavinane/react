import { observable, action } from "mobx";

const calculationStore = observable({
  valueOne: "",
  valueTwo: "",
  valueThree: "",
  valueFour: "",
  valueFive: "",
  valueSix: "",
  get multiplication() {
    return this.valueOne * this.valueTwo;
  },

  setValueOne(valueOne) {
    this.valueOne = valueOne;
  },
  setValueTwo(valueTwo) {
    this.valueTwo = valueTwo;
  },

  get addition() {
    return Number(this.valueThree) + Number(this.valueFour);
  },

  firstValue: action((valueThree) => {
    calculationStore.valueThree = valueThree;
  }),
  secondValue: action((valueFour) => {
    calculationStore.valueFour = valueFour;
  }),
  get substraction() {
    return Number(this.valueFive) - Number(this.valueSix);
  },

  thirdValue: action((valueFive) => {
    calculationStore.valueFive = valueFive;
  }),
  fourValue: action((valueSix) => {
    calculationStore.valueSix = valueSix;
  }),
});

export default calculationStore;
