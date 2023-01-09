import { useState } from "react";


// The problem with this API call is that for do this call I need to pay for it, because it's a paid API.

// Making API call to get weather forecast
const [data, setData] = useState([]);
const API_KEY = "52488d5258053055db46f733faa00580";

function getWeatherForecast() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });

  return data;
}

export default getWeatherForecast;
