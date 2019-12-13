import React, { useState, useEffect } from "react";

const HooksBasic = () => (
  <>
    <HooksCounter />
    <HooksMultiCounter />
    <HooksDisplay />
    <HooksArray />
  </>
);

const HooksCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button type="button" onClick={increment}>
        +
      </button>
      <p>{count}</p>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

const HooksMultiCounter = () => {
  const [text, setText] = useState("");

  const Click = n => setText(n);

  return (
    <div>
      <button type="button" onClick={() => Click("one")}>
        one
      </button>
      <button type="button" onClick={() => Click("two")}>
        two
      </button>
      <button type="button" onClick={() => Click("three")}>
        three
      </button>
      <p>{text}</p>
    </div>
  );
};

const HooksDisplay = () => {
  const [photo, setPhoto] = useState(false);

  const Showphoto = () => setPhoto(!photo);

  return (
    <div>
      <button type="button" onClick={Showphoto}>
        {photo ? "hide photo" : "show photo"}
      </button>
      {photo && <img src="https://placeimg.com/500/200/cars" alt="" />}
    </div>
  );
};

const HooksArray = () => {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.randomuser.me/?results=10")
      .then(response => response.json())
      .then(data => setPerson(data.results[1]));
  }, []);
  return (
    <div>
      <button type="button" onClick={useEffect}>
        Show
      </button>

      {person ? (
        <>
          <p>{person.name.title}</p>
          <p>{person.name.first}</p>
          <p>{person.name.last}</p>
          <p>{person.email}</p>
          <img src={person.picture.large} alt="" />
        </>
      ) : (
        <p>
          No data in the state, Click above button to fetch data from the API
        </p>
      )}
    </div>
  );
};
export default HooksBasic;
