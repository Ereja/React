import cityWeather from "../city-weather";
import CityCard from "./CityCard";
import "./CityCardList.css";

const CityCardList = () => {
  return (
    <div className="flex-container">
      {cityWeather.map(weatherData => {
        return (
          <CityCard
            key={weatherData.id}
            city={weatherData.name}
            country={weatherData.sys.country}
            weather={weatherData.weather[0].main}
            description={weatherData.weather[0].description}
            maxTemp={weatherData.main.temp_max}
            minTemp={weatherData.main.temp_min}
            lon={weatherData.coord.lon}
            lat={weatherData.coord.lat}
          />
        );
      })}
    </div>
  );
};

export default CityCardList;
