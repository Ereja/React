import CityCard from "./CityCard";
import "./CityCardList.css";

const CityCardList = ({ cityWeather, removeCity }) => {
  return (
    <div className="flex-container">
      {cityWeather.map(weatherData => {
        const { id, name, sys, weather, main, coord } = weatherData;
        return (
          <CityCard
            removeCity={removeCity}
            key={id}
            id={id}
            city={name}
            country={sys.country}
            weather={weather[0].main}
            description={weather[0].description}
            maxTemp={main.temp_max}
            minTemp={main.temp_min}
            lon={coord.lon}
            lat={coord.lat}
            icon={weather[0].icon}
          />
        );
      })}
    </div>
  );
};

export default CityCardList;
