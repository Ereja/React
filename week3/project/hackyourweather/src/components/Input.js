import { useState, useEffect } from "react";
import DefaultButton from "./DefaultButton";
import CityCardList from "./CityCardList";
import Loading from "./Loading";
import Error from "./Error";
import "./Input.css";

const Input = () => {
  //value of searched city
  const [city, setCity] = useState("");
  //weather data
  const [weatherData, setWeatherData] = useState([]);
  //check for errors
  const [hasError, setError] = useState({ show: false });
  //check for loading
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setError({ show: false });
    }, 3000);
    return () => {
      clearTimeout(errorTimer);
    };
  }, [hasError]);

  //if there is an error, display error message for 3sec
  const handleError = ({ errorMessage }) => {
    setError({ show: true, errorMessage });
  };

  // remove city from array
  const removeCity = (id, data) => {
    const newCityList = weatherData.filter(city => city.id !== id);
    data ? setWeatherData([data, ...newCityList]) : setWeatherData(newCityList);
  };

  const getWeather = async () => {
    try {
      setLoading(true);
      //if fetch succesful, setting error to false will clear timeout
      setError({ show: false });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
`);
      if (!response.ok) {
        handleError({
          errorMessage: "City not found! Please try another city.",
        });
        return;
      }
      const data = await response.json();
      //if city is already fetched, remove it from the list and re-add at the top of the list, instead of placing multiple cards with the same city
      const cityAlreadyFound = weatherData.find(city => city.id === data.id);
      cityAlreadyFound
        ? removeCity(cityAlreadyFound.id, data)
        : setWeatherData([data, ...weatherData]);
    } catch (err) {
      handleError({
        errorMessage: "Ooops, something went wrong! Please try again",
      });
    } finally {
      setLoading(false);
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
        <CityCardList cityWeather={weatherData} removeCity={removeCity} />
      )}
    </div>
  );
};

export default Input;
