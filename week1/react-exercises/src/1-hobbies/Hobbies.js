import "./Hobbies.css";
import Hobby from "./Hobby";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div className="hobbies">
      <h1>Extreme Hobbies:</h1>
      <ul>
        {hobbies.map((hobby, i) => (
          <Hobby key={hobby} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
