import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner, Text,
  theme,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import Details from "./Details";

const Card = () => {
  const API_Key = "2d2fa75c38f927368a5b7f44ea7c961f";
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const [favorite, setFavorite] = useState(false);

  const getWwatherData = () => {
    try {
      // We call the navigator object which is a prop inside the window object
      navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;

        // Once we got the latitude and longitude from the navigator, we can make the request
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric&lang=es`
        )
          .then((res) => res.json())
          .then((weatherData) => {
            setWeatherData(weatherData);
          })
          .finally(() => setIsFetching(false));
      });
    } catch (e) {
      // If an error occurs we catch it and display it by console
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    getWwatherData();
  }, []);

  const addFavorite = () => {
    setFavorite(!favorite);
  };

  console.log(theme);

  return (
    <Box
      padding={14}
      bgColor="blackAlpha.600"
      borderRadius="md"
      backdropFilter="auto"
      backdropBlur="5px"
      boxShadow="dark-lg"
      height="400px"
      w="100%"
    >
      {isFetching ? (
        <Flex align="center" justify="center" height="100%" w="100%">
          <Spinner
            label="Loading..."
            size="xl"
            speed="0.6s"
            thickness="4px"
            emptyColor="gray.300"
            color="telegram.500"
          />
        </Flex>
      ) : (
        <VStack
          alignItems="start"
          justify="space-between"
          h="100%"
          color="whiteAlpha.900"
        >
            <VStack>
              <HStack>
                <Box>
                  <Heading fontSize="3xl" fontWeight="bold">
                    {weatherData.name}, {weatherData.sys.country}
                  </Heading>
                  <Text fontWeight="bold" fontSize="6xl">
                    {weatherData.main.temp} °C
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Feels Like: {weatherData.main.feels_like} °C
                  </Text>
                </Box>
                <Text>{weatherData.weather.description}</Text>
              </HStack>
            </VStack>
            <Icon
              as={favorite ? AiFillStar : BsStar}
              color={favorite ? "yellow.500" : "whiteAlpha.900"}
              boxSize={favorite ? 7 : 6}
              cursor="pointer"
              onClick={addFavorite}
              dropShadow="md"
              position="absolute"
              top={12}
              right={12}
            />
          <Details
            tempMin={weatherData.main.temp_min}
            tempMax={weatherData.main.temp_max}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
          />
        </VStack>
      )}
    </Box>
  );
};

export default Card;
