import {
  Heading,
  HStack,
  Icon, Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import Details from "./Details";

const Card = ({ weatherData }) => {
  const [favorite, setFavorite] = useState(false);
  const date = new Date;


  return (
    <VStack
      alignItems="start"
      justify="space-between"
      h="100%"
      color="whiteAlpha.900"
      w="full"
    >
      <HStack justify="space-between" w="full">
        <VStack spacing="4px" align="start" flex={0.8}>
          <Heading fontSize="3xl" fontWeight="bold">
            {weatherData.name}, {weatherData.sys.country}
          </Heading>
          <Text fontWeight="bold" fontSize="6xl" margin={0}>
            {weatherData.main.temp} °C
          </Text>
          <Text fontSize="sm" fontWeight="light">
            Feels Like: {weatherData.main.feels_like} °C
          </Text>
        </VStack>
        <VStack flex={1} justify="space-between">
          <Text fontWeight="semibold">{weatherData.weather[0].main}</Text>
        </VStack>
      </HStack>
      <Icon
        as={favorite ? AiFillStar : BsStar}
        color={favorite ? "yellow.500" : "whiteAlpha.900"}
        boxSize={favorite ? 7 : 6}
        cursor="pointer"
        onClick={() => setFavorite(!favorite)}
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
  );
};

export default Card;
