import React, { useState } from "react";

const CheckboxOption = () => {
  const [metal, setMetal] = useState(false);

  handleChangeName = ({ event }) => {
    console.log(event.target.name, event.target.checked);

    setMetal({
      [event.target.name]: event.target.checked
    });
    if (event.target.checked) {
      this.props.add(event.target.name);
    } else {
      this.props.remove(event.target.name);
    }
  };
  return (
    <>
      <label>
        <input
          type="text"
          name="metal"
          checked={metal}
          onChange={handleChangeName}
        />
      </label>
    </>
  );
};

const Checkbox = () => {
  const { selected, setSelected } = useState([]);

  const addSelected = ({ select }) =>
    setSelected(({ selected }) => ({ selected: [...selected, select] }));

  const removeSelected = select =>
    setSelected({ selected: selected.filter(s => s !== select) });

  console.log(selected);
  return (
    <>
      <h3>Material</h3>
      <CheckboxOption add={addSelected} remove={removeSelected} />
      {selected && selected.map(s => <p>{s}</p>)}
    </>
  );
};

export default Checkbox;
