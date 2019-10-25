import React, { Component } from "react";
import MobxCounter from "./MobxCounter";
import counterStore from "./MObxStore";
import Calculation from "./Calculation";
import CalculationStore from "./CalculationStore";

class Mobx extends Component {
  render() {
    return (
      <>
        <MobxCounter store={counterStore} />
        <Calculation store={CalculationStore} />
      </>
    );
  }
}

export default Mobx;
