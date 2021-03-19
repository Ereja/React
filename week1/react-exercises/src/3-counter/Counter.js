import { useState } from "react";
import "./Counter.css";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const feedback = count > 10 ? "It`s higher than 10!" : "Keep counting...";

  return (
    <div className="counter">
      <h1>Counter:</h1>
      <Count count={count} />
      <Button addOne={increaseCount} />
      <h3>{feedback}</h3>
    </div>
  );
};

export default Counter;
