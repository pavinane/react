import React from "react";
import shortid from "shortid";
import "./todo.scss";
class TodoForm extends React.Component {
  state = {
    todoText: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.add({
      id: shortid.generate(),
      text: this.state.todoText,
      completed: false
    });
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="todoText"
            type="text"
            value={todoText}
            onChange={this.handleChange}
            placeholder="Enter Todo"
          />
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}

class TodoText extends React.Component {
  render() {
    const { todo, completeFunc, deleteFunc } = this.props;
    return (
      <div className="todo-text">
        {todo.id && ( //&& is true condition
          <>
            <h3 style={{ textDecoration: todo.completed && "line-through" }}>
              {todo.text}
            </h3>
            <p style={{ cursor: "pointer" }}>
              {todo.completed ? (
                <span role="img" onClick={() => completeFunc(todo.id)}>
                  &#11088;
                </span>
              ) : (
                <span role="img" onClick={() => completeFunc(todo.id)}>
                  &#9989;
                </span>
              )}
            </p>
            <p style={{ cursor: "pointer" }}>
              <span role="img" onClick={() => deleteFunc(todo.id)}>
                &#10062;
              </span>
            </p>
          </>
        )}
      </div>
    );
  }
}

class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(({ todos }) => ({ todos: [todo, ...todos] })); //spar
  };

  completeTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(t => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      })
    }));
  };

  deleteTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(t => t.id !== id)
    }));
  };

  render() {
    const { todos } = this.state; // this means destructure
    return (
      <>
        <TodoForm add={this.addTodo} />
        {todos.map(s => (
          <TodoText
            key={s.id}
            todo={s}
            completeFunc={this.completeTodo}
            deleteFunc={this.deleteTodo}
          />
        ))}
      </>
    );
  }
}
class TodoApp extends React.Component {
  render() {
    return (
      <div className="list">
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
