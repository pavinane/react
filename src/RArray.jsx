import React from "react";

class RArray extends React.Component {
  state = {
    loading: true,
    person: []
  };

  fetchData = () => {
    fetch("https://api.randomuser.me/?results=10")
      .then(responce => responce.json())
      .then(data => this.setState({ person: data.results, loading: false }));
  };
  render() {
    const { loading, person } = this.state;
    return (
      <>
        <button type="button" onClick={this.fetchData}>
          Show
        </button>
        {loading && <p>loading...</p>}
        {person ? (
          person.map(p => (
            <div key={p.name.first + p.name.last}>
              <p>{p.name.title}</p>
              <p>{p.name.first}</p>
              <p>{p.name.last}</p>
              <p>{p.email}</p>
              <img src={p.picture.large} alt="" />
            </div>
          ))
        ) : (
          <p>no loading</p>
        )}
      </>
    );
  }
}

export default RArray;
