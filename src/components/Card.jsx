import { Box, VStack, Text, Spinner, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import bahiaBlanca from '../assets/image/bahia-blanca.jpeg';

const Card = () => {
  const API_Key = "5431adfd8102483dbcc5b0d4649f6348";
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [successFetch, setSuccessFetch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(true);

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
          .finally(() => setLoading(false));
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
      bgColor="gray.50"
      boxShadow=''
      borderRadius="md"
      marginTop={10}
      height="400px"
      bgImage={ weatherData ? bahiaBlanca : undefined}
      bgSize='cover'
      bgPosition='center'
    >
      {loading ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          h="100%"
        >
          <Spinner
            label="Loading..."
            size="xl"
            speed="0.6s"
            thickness="4px"
            emptyColor="gray.200"
            color="yellow.400"
          />
        </Container>
      ) : !successFetch ? (
        <VStack justify="center">
          <Text fontWeight="semibold" as="h5">
            Sorry !, we have a error during the fetching of your city
          </Text>
          <VStack>
            <Text>Error Detail:</Text>
            <Text fontWeight="ligth">{errorMessage}</Text>
          </VStack>
        </VStack>
      ) : (
        <VStack alignItems="start">
          <Text>{console.log(weatherData)}</Text>
          <Text as="h5" fontSize={22} fontWeight="semibold" color='whiteAlpha.900'>
            {weatherData.name}
          </Text>
          <Text color='whiteAlpha.900' fontWeight='semibold' textTransform='capitalize'>{weatherData.weather[0].description}</Text>
        </VStack>
      )}
    </Box>
  );
};

export default Card;
