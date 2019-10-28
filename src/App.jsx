import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Color from "./Color";
import Counter from "./Counter";
import Pic from "./Pic";
import Task from "./Task";
import Gallery from "./Gallery";
import Instagram from "./Instagram";
import Form from "./Form";
import Fetch from "./Fetch";
import Atsemico from "./Atsemico";
import LocalStorage from "./LocalStorage";
import RArray from "./RArray";
import ToDo from "./ToDo";
import Mobx from "./Mobx/Index";
// import Redux from "./Redux";
import "./App.css";

const menu = [
  "home",
  "compo",
  "counter",
  "toggle",
  "gallery",
  "multi-btn",
  "instagram",
  "form",
  "fetch",
  "atsemicolon",
  "RArray",
  "ToDo",
  "LocalStorage",
  "Redux",
  "Mobx",
];
const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map((m) => (
        // <Link to="/gallery" />
        <Link key={m} to={m === "home" ? "/" : `/${m}`}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>
  </div>
);

const Home = () => <h3>This is Home</h3>;

const Compo = () => (
  <>
    <p>Hello</p>
    <Color title="Red" />
    <Color title="Green" />
    <Color title="BLUE" />
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
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/multi-btn" component={Task} />
            <Route exact path="/Instagram" component={Instagram} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/Fetch" component={Fetch} />
            <Route exact path="/Atsemicolon" component={Atsemico} />
            <Route exact path="/RArray" component={RArray} />
            <Route exact path="/ToDo" component={ToDo} />
            <Route exact path="/LocalStorage" component={LocalStorage} />
            <Route exact path="/Mobx" component={Mobx} />
            {/* <Route exact path="/Redux" component={Redux} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
