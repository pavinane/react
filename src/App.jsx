import React from 'react';
import './App.css';

const Red = ({ title, bg }) => (
  <div
    className="red"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);
const Green = ({ title, bg }) => (
  <div
    className="green"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);
const Blue = ({ title, bg }) => (
  <div
    className="blue"
    style={{
      background: bg,
    }}
  >
    <p>{title}</p>
  </div>
);

const App = () => (
  <div className="App">
    <p>Hello</p>
    <Red title="red" bg="lightgreen" />
    <Green title="green" bg="lightblue" />
    <Blue title="blue" bg="pink" />
  </div>
);

export default App;
