import { useState, useEffect } from "react";
import "./RandomJoke.css";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const result = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const { setup, punchline } = await result.json();
      setJoke({
        setup,
        punchline,
      });
    } catch (err) {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      {hasError && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      {!hasError && !isLoading && (
        <Joke setup={joke.setup} punchline={joke.punchline} />
      )}
    </div>
  );
};

export default RandomJoke;
