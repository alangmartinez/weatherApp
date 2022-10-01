import { useEffect, useState } from "react";

export function useWeatherData() {
  const API_Key = "2d2fa75c38f927368a5b7f44ea7c961f";
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric&lang=es`
        )
          .then((response) => response.json())
          .then((data) => setWeatherData(data))
          .catch((e) => {
            console.log(e.message);
          })
          .finally(() => setIsFetching(false));
      });
  }, []);

  return { weatherData, isFetching };
}
