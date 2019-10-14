import React from "react";

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
      <>
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
      </>
    );
  }
}

export default Fetch;
