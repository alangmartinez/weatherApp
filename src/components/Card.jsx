import {
  Box, Flex, HStack,
  Image, Spinner, Text, VStack, Stack,
  useMediaQuery
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import sunnyDay from "../assets/images/sunny-day.png";

const Card = () => {
  const API_Key = "5431adfd8102483dbcc5b0d4649f6348";
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isLargerThan1280] = useMediaQuery(['(min-width: 1280px)']) 

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
      setSuccessFetch(false);
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    getWwatherData();
  }, []);

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
        <Flex align='center' justify='center' height='100%' w='100%'
        >
          <Spinner
            label="Loading..."
            size="xl"
            speed="0.6s"
            thickness="4px"
            emptyColor="gray.300"
            color='telegram.500'
          />
        </Flex>
      ) : (
        <VStack alignItems="start">
          <Stack justify="space-between" alignItems='center' direction={isLargerThan1280 ? 'row' : 'column'} w="100%">
            <Box>
              <Text fontSize="4xl" color="whitesmoke" fontWeight="bold">
                {weatherData.name}
              </Text>
              <Text color='whitesmoke'>{weatherData.weather[0].description}</Text>
            </Box>
            <HStack spacing={6}>
              <Text color='whitesmoke' fontWeight='semibold' fontSize='5xl'>{weatherData.main.temp} °C</Text>
              <Image src={sunnyDay} alt="sunny day" boxSize={20} />
            </HStack>
          </Stack>
        </VStack>
      )}
    </Box>
  );
};

export default Card;
