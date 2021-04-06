import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import "./CityCard.css";
import { FiXOctagon } from "react-icons/fi";

const CityCard = ({
  id,
  city,
  country,
  weather,
  description,
  maxTemp,
  minTemp,
  lon,
  lat,
  icon,
}) => {
  const { toggleCity } = useContext(GlobalContext);
  return (
    <div className="card-container">
      <button className="delete-btn" onClick={() => toggleCity(id)}>
        <FiXOctagon />
      </button>
      <Link to={`/city/${id}`}>
        <h2 className="center-text">
          {city}, <span>{country}</span>
        </h2>
      </Link>
      <h3 className="center-text">{weather}</h3>
      <h4 className="center-text">{description}</h4>
      <div className="icon-container">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
      <p>
        Max temp: <span>{maxTemp}°C</span>
      </p>
      <p>
        Min temp: <span>{minTemp}°C</span>
      </p>
      <p>
        Location: {lon}, {lat}
      </p>
    </div>
  );
};

export default CityCard;
