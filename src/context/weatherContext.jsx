import { createContext, useState } from "react";

export const weatherContext = createContext({});

const WeatherProvider = ({ children }) => {
  const APIkey = "d59bf087464896739f255d2ed8191ee3";
  const [weatherData, setWeatherData] = useState({});

  function getWeatherData({ city }) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error));
  }

  return (
    <weatherContext.Provider value={{ weatherData, getWeatherData }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
