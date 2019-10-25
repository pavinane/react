import React from "react";
import { observer } from "mobx-react";

const Calculation = ({ store }) => (
  <div>
    <h1>Multiplication Example with Mobx | Reactive way</h1>
    <input
      onChange={e => store.setValueOne(e.target.value)}
      name="valuOne"
      type="text"
    />
    <input
      onChange={e => store.setValueTwo(e.target.value)}
      name="valueTwo"
      type="text"
    />
    <h3>{store.multiplication}</h3>

    <h1>Addition Example with Mobx | Reactive</h1>
    <input
      onChange={e => store.firstvalue(e.target.value)}
      name="valueThree"
      type="text"
    />
    <h3>{store.addition}</h3>
  </div>
);

export default observer(Calculation);
