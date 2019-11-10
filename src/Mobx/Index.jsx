import React, { Component } from "react";
import MobxCounter from "./MobxCounter";
import counterStore from "./MobxStore";
import Calculation from "./Calculation";
import CalculationStore from "./CalculationStore";
import MobxTodo from "./MobxTodo";
import MobxtodoStore from "./MobxtodoStore";

class Mobx extends Component {
  render() {
    return (
      <>
        <MobxCounter store={counterStore} />
        <Calculation store={CalculationStore} />
        <MobxTodo store={MobxtodoStore} />
      </>
    );
  }
}

export default Mobx;
