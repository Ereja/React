import { useState, useContext } from "react";
import useFetch from "./useFetch";
import { GlobalContext } from "./GlobalContext";
import DefaultButton from "./DefaultButton";
import CityCardList from "./CityCardList";
import Loading from "./Loading";
import Error from "./Error";
import "./Input.css";

const Input = () => {
  //value of searched city
  const [city, setCity] = useState("");
  //weather data
  const { weatherData, setWeatherData, toggleCity } = useContext(GlobalContext);
  //check for errors
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
`;
  const { hasError, isLoading, fetchData } = useFetch(url);

  const getWeather = async () => {
    const data = await fetchData();
    if (data) {
      const cityAlreadyFound = weatherData.find(city => city.id === data.id);
      cityAlreadyFound
        ? toggleCity(cityAlreadyFound.id, data)
        : setWeatherData([data, ...weatherData]);
    }
  };

  const InputValue = e => setCity(e.target.value);

  const formSubmit = e => {
    e.preventDefault();
    //clear input
    setCity("");
  };

  return (
    <div className="flex-container">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Enter a city name..."
          onChange={InputValue}
        />
        <DefaultButton onClick={() => getWeather()} disabled={!city} />
      </form>

      {isLoading && <Loading />}

      {hasError.show && <Error errorMessage={hasError.errorMessage} />}

      {weatherData && (
        <CityCardList cityWeather={weatherData}/>
      )}
    </div>
  );
};

export default Input;
