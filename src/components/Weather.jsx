import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function Weather() {
  const [isFetching, setIsFetching] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const APIKey = "d59bf087464896739f255d2ed8191ee3";

  function fetchWeather(city) {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
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
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <SearchBar fetchWeather={fetchWeather} />
      <Box h="600px" w="400px" boxShadow="dark-lg" borderRadius="lg">
        {isFetching ? (
          <Spinner
            label="Loading..."
            size="xl"
            speed=".8s"
            thickness="4px"
            emptyColor="gray.300"
            color="telegram.500"
          />
        ) : (
          <Card weatherData={weatherData} />
        )}
      </Box>
    </>
  );
}
