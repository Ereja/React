import React from "react";

const Joke = ({ setup, punchline }) => {
  return (
    <>
      <h1>Random Joke:</h1>
      <p>{setup}</p>
      <p>{punchline}</p>
    </>
  );
};

export default Joke;
