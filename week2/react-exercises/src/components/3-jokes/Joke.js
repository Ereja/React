import React from "react";

const Joke = ({ setup, punchline }) => {
  return (
    <>
      <p>{setup}</p>
      <p>{punchline}</p>
    </>
  );
};

export default Joke;
