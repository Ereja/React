import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import CityCard from "./CityCard";
import "./CityCardList.css";

const CityCardList = () => {
  const { weatherData } = useContext(GlobalContext);
  return (
    <div className="flex-container">
      {weatherData.map(({ id, name, sys, weather, main, coord }) => {
        return (
          <CityCard
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
