import React from "react";
import "./fetch.scss";

class Fetch extends React.Component {
  state = {
    loading: true,
    person: null
  };
  fetchData = () => {
    fetch("https://api.randomuser.me/")
      .then(responce => responce.json())
      .then(data => this.setState({ person: data.results[0], loading: false }));
  };
  render() {
    const { person, loading } = this.state;
    return (
      <div className="fet-exaple">
        <button type="button" onClick={this.fetchData}>
          fetch
        </button>
        {loading && <p>loading...</p>}
        {person ? (
          <>
            <p>{person.name.title}</p>
            <p>{person.name.first}</p>
            <p>{person.name.last}</p>
            <p>{person.email}</p>
            {/* <p>{person.facebook}</p> */}
            <img src={person.picture.large} alt="" />
          </>
        ) : (
          <p>
            No data in the state , Click above button to fetch data from the API
          </p>
        )}
      </div>
    );
  }
}

class Fetchpavi extends React.Component {
  state = {
    loading: true,
    name: ""
  };
  fetchData = () => {
    fetch("https://api.github.com/users/pavinane")
      .then(responce => responce.json()) //console.log(data)); use for reference
      .then(data => this.setState({ name: data, loading: false }));
  };
  render() {
    const { name, loading } = this.state;
    return (
      <div className="my user">
        <button type="button" onClick={this.fetchData}>
          schedule
        </button>
        {loading && <p>loading...</p>}
        {name ? (
          <>
            <p>{name.id}</p>
            <p>{name.node_id}</p>
            <p>{name.name}</p>
          </>
        ) : (
          <p>No data in the state</p>
        )}
      </div>
    );
  }
}

class Pavi extends React.Component {
  render() {
    return (
      <div className="fet">
        <Fetch />
        <Fetchpavi />
      </div>
    );
  }
}
export default Pavi;
