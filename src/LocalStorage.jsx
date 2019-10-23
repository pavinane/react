import React, { Component } from "react";

class LocalStorage extends Component {
  state = {
    todoText: "",
    data: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("todo", this.state.todoText);
  };

  getData = () => {
    const cc = localStorage.getItem("todo");
    this.setState({ data: cc });
  };

  render() {
    const { todoText, data } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="todoText"
            type="text"
            value={todoText}
            onChange={this.handleChange}
            placeholder="Enter Todo"
          />
          <button type="submit">set data to localStorage</button>
        </form>

        <button type="button" onClick={this.getData}>
          Get Data from localStorage
        </button>
        <p>{data && data}</p>

        <button type="button" onClick={() => localStorage.removeItem("todo")}>
          Delete Data from localStorage
        </button>

        <button type="button" onClick={() => localStorage.clear("todo")}>
          Clear Data from localStorage
        </button>
      </>
    );
  }
}
export default LocalStorage;
