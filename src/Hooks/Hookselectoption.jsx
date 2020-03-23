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
        <div>
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
        <Topmention />
        <Tickbox />
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

const Topmention = () => {
  const [display, setDisplay] = useState("");
  const [option, SetOption] = useState(true);

  const showButton = n => {
    setDisplay(n);
    SetOption(!option);
    console.log(option);
  };

  return (
    <div>
      <div className="photo">
        <button
          value="quality"
          type="button"
          onClick={() => showButton(Quality)}
        >
          one
        </button>
        <button value="fit" type="button" onClick={() => showButton(Fit)}>
          two
        </button>
        <button value="color" type="button" onClick={() => showButton(Color)}>
          three
        </button>

        {option ? <div>{display}</div> : ""}
      </div>
    </div>
  );
};

const Quality = () => {
  return (
    <div className="quality-section">
      <div id="qua">
        <h1>what a reviwes are saying</h1>
        <div className="quality-block">
          <h1>
            <i class="fas fa-thumbs-up" />
            "good quality"
          </h1>
          <h1>
            <i class="fas fa-thumbs-up" />
            "good quality"
          </h1>
        </div>
      </div>
    </div>
  );
};

const Fit = () => {
  return (
    <div className="fit-section">
      <div id="fit">
        <h1>what a reviwes are saying</h1>
        <div className="fit-block">
          <h1>
            <i class="fas fa-thumbs-up" />
            "They fit him perfectly and go well with the sleep pants I got him"
          </h1>
        </div>
      </div>
    </div>
  );
};
const Color = () => {
  return (
    <div className="color-section">
      <div id="color">
        <h1>what a reviwes are saying</h1>
        <div className="color-block">
          <h1>
            <i class="fas fa-thumbs-up" />
            Super soft and the colors are good"
          </h1>
        </div>
      </div>
    </div>
  );
};

const CheckedBox = ({ add, remove }) => {
  const [click, setClick] = useState(false);

  const Clicked = e => {
    console.log(e.target.name, e.target.checked);
    setClick({
      [e.target.name]: e.target.value
    });
    if (e.target.checked) {
      add(e.target.name);
    } else {
      remove(e.target.name);
    }
    // {
    //   e.target.checked ? add(e.target.value) : remove(e.target.value);
    // }
  };

  return (
    <>
      <label>
        <input type="checkbox" name="box1" value={click} onChange={Clicked} />
        box 1
      </label>
      <label>
        <input type="checkbox" name="box2" value={click} onChange={Clicked} />
        box2
      </label>
      <label>
        <input type="checkbox" name="box3" value={click} onChange={Clicked} />
        box3
      </label>
      <label>
        <input type="checkbox" name="box4" value={click} onChange={Clicked} />
        box4
      </label>
      <label>
        <input type="checkbox" name="box5" value={click} onChange={Clicked} />
        box5
      </label>
    </>
  );
};
class Tickbox extends React.Component {
  state = {
    selected: []
  };

  addSelected = select =>
    this.setState(({ selected }) => ({ selected: [...selected, select] }));
  removeSelected = select =>
    this.setState({ selected: this.state.selected.filter(s => s !== select) });

  render() {
    console.log(this.state.selected);
    return (
      <>
        <h3>tick the box</h3>
        <CheckedBox add={this.addSelected} remove={this.removeSelected} />
      </>
    );
  }
}
