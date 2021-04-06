import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <button className="weather-btn">Back</button>
    </Link>
  );
};

export default BackButton;
