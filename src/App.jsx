import React from 'react';
import Color from './Color';
import Counter from './Counter';
import Pic from './Pic';
import Task from './Task';
import './App.css';


const App = () => (
  <div className="App">
    <p>Hello</p>
    <Counter head="just try" />
    <Color title="red" />
    <Pic />
    <Color title="green" />
    <Task />
    <Color title="blue" />

  </div>

);

export default App;
