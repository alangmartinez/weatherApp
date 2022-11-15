import React, {
  createContext, useState
} from "react";

export const weatherContext = createContext({});

const WeatherProvider = ({ children }) => {
  // Make a call to the API and get the data
  // https://openweathermap.org/api/one-call-api
  // set the data to the state
  // pass the data to the components
  // use the data to display the weather info

  const APIKey = "d59bf087464896739f255d2ed8191ee3";
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const fetchWeather = ({search}) => {
    if (search !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.log(err))
        .finally(() => setIsFetching(false));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => setWeatherData(data))
          .catch((err) => console.log(err))
          .finally(() => setIsFetching(false));
      });
    }
  };


  return (
    <weatherContext.Provider value={{ weatherData, fetchWeather, isFetching }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
