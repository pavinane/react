import React from 'react';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Color from './Color';
import Counter from './Counter';
import Pic from './Pic';
import Task from './Task';
import './App.css';

const menu = ['home', 'compo', 'counter', 'toggle', 'task'];

const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map((m) => (
        <Link to={m === 'home' ? '/' : `/${m}`}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>
  </div>
);

const Home = () => <h3>this is home</h3>;

const Compo = () => (
  <>
    <p>Hello</p>
    <Color title="red" />
    <Color title="green" />
    <Color title="blue" />
  </>
);

const Toggle = () => <Pic />;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation menus={menu} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/compo" component={Compo} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/toggle" component={Toggle} />
            <Route exact path="/task" component={Task} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
