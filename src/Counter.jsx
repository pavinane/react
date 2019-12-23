import React from "react";

class Count extends React.Component {
  state = {
    count: 0
  };

  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    const { count } = this.state;

    return (
      <div className="counting">
        <button className="button" onClick={this.increment}>
          +
        </button>
        <p>{count}</p>
        <button className="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Count;
