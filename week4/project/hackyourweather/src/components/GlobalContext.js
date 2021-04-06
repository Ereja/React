import React, { useState } from "react";

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);

  const toggleCity = (id, data) => {
    const newCityList = weatherData.filter(city => city.id !== id);
    data ? setWeatherData([data, ...newCityList]) : setWeatherData(newCityList);
  };

  return (
    <GlobalContext.Provider value={{ weatherData, setWeatherData, toggleCity }}>
      {children}
    </GlobalContext.Provider>
  );
};
