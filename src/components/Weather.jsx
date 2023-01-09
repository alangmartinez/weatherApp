import {
  Grid,
  GridItem,
  Spinner,
  useColorModeValue,
  VStack,
  Heading,
  Text,
  Button,
  AspectRatio,
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
    <VStack spacing={24}>
      <SearchBar fetchWeather={fetchWeather} />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={6}
        w="full"
      >
        <GridItem
          colStart={1}
          colEnd={4}
          rowSpan={2}
          boxShadow="dark-lg"
          borderRadius="lg"
        >
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
          colStart={4}
          colEnd={6}
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
          colStart={4}
          colEnd={6}
        >
          <VStack spacing={4} align="start" h="full">
            <Heading color="whitesmoke">Help</Heading>
            <Text flex={2} color="#eaeaea">
              Did you find something wrong with the application?
              <br />
              Complete the form! And let us know.
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
        <GridItem
          colStart={3}
          colEnd={6}
          rowStart={3}
          rowEnd={5}
          boxShadow="dark-lg"
        >
          <AspectRatio ratio={4 / 3}>
            <iframe
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24905.79861531505!2d-62.24936960000001!3d-38.7126469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1672775140955!5m2!1ses-419!2sar"
            ></iframe>
          </AspectRatio>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={3}
          rowEnd={4}
          bgColor="blackAlpha.800"
          p="1.5rem 2rem"
          borderRadius="md"
          boxShadow="dark-lg"
          backdropFilter="auto"
          backdropBlur="20px"
        >
          <VStack align="start">
            <Heading color="whitesmoke">Favorites</Heading>
          </VStack>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={4}
          rowEnd={5}
          bgColor="blackAlpha.800"
          p="1.5rem 2rem"
          borderRadius="md"
          boxShadow="dark-lg"
          backdropFilter="auto"
          backdropBlur="20px"
        >
          <Heading as="h2" color="whitesmoke">
            Favorites
          </Heading>
        </GridItem>
      </Grid>
    </VStack>
  );
}
