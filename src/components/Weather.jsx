import {
  Grid,
  GridItem,
  Spinner,
  useColorModeValue,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Weather() {
  const bgColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.900", "blackAlpha.900");
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
    <VStack spacing={24} marginBottom={24}>
      <SearchBar fetchWeather={fetchWeather} />
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={6}
        w="full"
      >
        <GridItem colSpan={2} rowSpan={4} boxShadow="dark-lg" borderRadius="lg">
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          borderRadius="md"
          bgColor={bgColor}
          p="1.5rem 2rem"
          backdropFilter="auto"
          backdropBlur="20px"
          color={color}
        >
          <VStack spacing={4} align="start">
            <Heading color="whitesmoke">About Us</Heading>
            <Text flex={2} color="#eaeaea">
              This App was created with the purpose of helping people with their
              travels, as they should anticipate what to wear based on the
              weather in the destination city.
            </Text>
            <Button
              color="whitesmoke"
              rightIcon={<BiPlus />}
              variant="unstyled"
              alignSelf="end"
            >
              <Link to="/about-us">See More</Link>
            </Button>
          </VStack>
        </GridItem>
        <GridItem
          borderRadius="md"
          bgColor="blackAlpha.800"
          p="1.5rem 2rem"
          backdropFilter="auto"
          backdropBlur="20px"
          boxShadow="dark-lg"
        >
          <VStack spacing={4} align="start" h="full">
            <Heading color="whitesmoke">Help</Heading>
            <Text flex={2} color="#eaeaea">
              Did you find something wrong with the application?
              <br />
              Complete the form!
              And let us know.
            </Text>
            <Button
              color="whitesmoke"
              rightIcon={<BiPlus />}
              variant="unstyled"
              alignSelf="end"
            >
              <Link to="/help">See More</Link>
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}
