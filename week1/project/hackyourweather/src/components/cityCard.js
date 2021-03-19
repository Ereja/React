<<<<<<< HEAD
import "./CityCard.css"

const CityCard = ({
  key,
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
    <div key={key} className="card-container">
      <h2 className="center-text">
        {city}, <span>{country}</span>
      </h2>
      <h3 className="center-text">{weather}</h3>
      <h4 className="center-text">{description}</h4>
      <p>
        Max temp: <span>{maxTemp}</span>
      </p>
      <p>
        Min temp: <span>{minTemp}</span>
      </p>
      <p>
        Location: {lon}, {lat}
      </p>
=======
import cityWeather from "../city-weather";

const CityCard = () => {
  return (
    <div className="flex-container">
      {cityWeather.map(weatherData => {
        return (
          <div key={weatherData.id} className="card-container">
            <h2 className="center-text">
              {weatherData.name}, <span>{weatherData.sys.country}</span>
            </h2>
            <h3 className="center-text">{weatherData.weather[0].main}</h3>
            <h4 className="center-text">
              {weatherData.weather[0].description}
            </h4>
            <p>
              Max temp: <span>{weatherData.main.temp_max}</span>
            </p>
            <p>
              Min temp: <span>{weatherData.main.temp_min}</span>
            </p>
            <p>
              Location: {weatherData.coord.lon}, {weatherData.coord.lat}
            </p>
          </div>
        );
      })}
>>>>>>> 4fd67af888d2a7e28e97448a90bd08778e968cde
    </div>
  );
};

export default CityCard;
