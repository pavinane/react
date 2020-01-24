import React, { useState } from "react";

class SelectOption extends React.Component {
  state = {
    selected: ""
  };

  onchange = e => {
    console.log(e.target.value);
    this.setState({ selected: e.target.value });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="review-select">
        <div className="option-review">
          <select value={selected} onChange={this.onchange}>
            <option value="1">select1</option>
            <option value="2">select2</option>
            <option value="3">select3</option>
            <option value="4">select4</option>
            <option value="5">select5</option>
          </select>
        </div>
        <DisplayOption selecting={selected} />
      </div>
    );
  }
}

export default SelectOption;

const DisplayOption = ({ selecting }) => {
  const OPtionname = name => {
    switch (name) {
      case "select1":
        return <div>select1</div>;
      case "select2":
        return <div>select2</div>;
      case "select3":
        return <div>select3</div>;
      case "select4":
        return <div>select4</div>;
      case "select5":
        return <div>select5</div>;
    }
  };
  return (
    <div>
      <h2>{selecting}</h2>
      {OPtionname(selecting)}
    </div>
  );
};
