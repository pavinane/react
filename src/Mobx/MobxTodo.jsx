import React from "react";
import { observer } from "mobx-react";

const MobxTodo = ({ store }) => (
  <div>
    <input
      // onChange={(e) => store.firstValue(e.target.value)}
      name="valuOne"
      type="text"
    />
    <button type="button" onClick={store.dis}>
      +
    </button>
    <h3>{store.Text}</h3>
  </div>
);

export default observer(MobxTodo);
