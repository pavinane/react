import React from "react";
import { observer } from "mobx-react";

const MobxCounter = ({ store }) => (
  <div>
    <h3>React Mobx | Basic Example | Counter</h3>
    <button type="button" onClick={store.increment}>
      +
    </button>
    <p>{store.count}</p>
    <button type="button" onClick={store.decrement}>
      -
    </button>
    <p>{store.countByThree}</p>
    <p>{store.countByFour}</p>
  </div>
);

export default observer(MobxCounter);
