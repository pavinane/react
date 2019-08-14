import React from 'react';
import './App.css';

const Red = () => (
  <div className="red">
    <p>RED</p>
  </div>
);
const Green = () => (
  <div className="green">
    <p>Green</p>
  </div>
);
const Blue = () => (
  <div className="blue">
    <p>Blue</p>
  </div>
);

const App = () => (
  <div className="App">
    <p>Hello</p>
    <Red />
    <Green />
    <Blue />
  </div>
);

export default App;
