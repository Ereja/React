import "./CityCard.css";

const CityCard = ({
  city,
  country,
  weather,
  description,
  maxTemp,
  minTemp,
  lon,
  lat,
}) => {
  return (
    <div className="card-container">
      <h2 className="center-text">
        {city}, <span>{country}</span>
      </h2>
      <h3 className="center-text">{weather}</h3>
      <h4 className="center-text">{description}</h4>
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
