import React from "react";
import { observer } from "mobx-react";

const Calculation = ({ store }) => (
  <div>
    <h1>Multiplication Example with Mobx | Reactive way</h1>
    <input
      onChange={(e) => store.setValueOne(e.target.value)}
      name="valuOne"
      type="text"
    />
    <input
      onChange={(e) => store.setValueTwo(e.target.value)}
      name="valueTwo"
      type="text"
    />
    <h3>{store.multiplication}</h3>

    <h1>Addition Example with Mobx | Reactive</h1>
    <input
      onChange={(e) => store.firstValue(e.target.value)}
      name="valueThree"
      type="text"
    />
    <input
      onChange={(e) => store.secondValue(e.target.value)}
      name="valueFour"
      type="text"
    />
    <h3>{store.addition}</h3>
    <h1>Substraction Example with Mobx | Reactive</h1>
    <input
      onChange={(e) => store.thirdValue(e.target.value)}
      name="valueFive"
      type="text"
    />
    <input
      onChange={(e) => store.fourValue(e.target.value)}
      name="valueSix"
      type="text"
    />
    <h3>{store.substraction}</h3>
  </div>
);

export default observer(Calculation);
