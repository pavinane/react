import React from "react";

class Fetch extends React.Component {
  state = {
    loading: true,
    person: null,
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
      <>
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
      </>
    );
  }
}
export default Fetch;
