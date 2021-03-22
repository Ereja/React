import { useState } from "react";
import DefaultButton from "./DefaultButton";
import CityCardList from "./CityCardList";
import Error from "./Error";
import "./Input.css";

const Input = () => {
  //value of searched city
  const [city, setCity] = useState("");
  //weather data
  const [weatherData, setWeatherData] = useState([]);
  //check for errors
  const [hasError, setError] = useState({ show: false });
  //check if city card should be displayed(without this, card reapears after error)
  const [showCard, setShowCityCard] = useState(true);
  //check for loading
  const [isLoading, setLoading] = useState(false);

  //if there is an error, display error message for 3sec
  const handleError = ({ errorMessage }) => {
    setError({ show: true, errorMessage });
    setTimeout(() => {
      setError({ show: false });
      setShowCityCard(false);
    }, 3000);
  };

  const getWeather = async () => {
    try {
      if (city) {
        setLoading(true);
        setShowCityCard(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
`);
        if (response.ok) {
          //week2 asks for one city card
          //for week3 to show all searches: setWeatherData([data, ...weatherData])
          const data = await response.json();
          setWeatherData([data]);
        } else {
          handleError({
            errorMessage: "City not found! Please try another city.",
          });
        }
      } else {
        handleError({ errorMessage: "City name can`t be empty." });
      }
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
        <DefaultButton onClick={() => getWeather()} />
      </form>

      {isLoading && <p>Loading...</p>}

      {hasError.show && <Error errorMessage={hasError.errorMessage} />}

      {!isLoading && !hasError.show && showCard && (
        <CityCardList cityWeather={weatherData} />
      )}
    </div>
  );
};

export default Input;
