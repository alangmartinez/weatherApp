import {
  Heading,
  HStack, Image,
  Text,
  VStack
} from "@chakra-ui/react";
import Clouds from "../../public/images/icons/clouds.png";
import Details from "./Details";

const Card = ({weatherData}) => {
  const icons = [
    {
      name: "clouds",
      icon: Clouds,
    },
  ];

  const backgrounds = [
    {
      weather: "Clouds",
      urlImage: "/images/cloudy.jpg",
    },
    {
      weather: "Sunny",
      urlImage: '/images/sunny.jpg'
    }
  ];

  const weathersBackground = (typeWeather) => {
    const background = backgrounds.find(
      (background) => background?.weather === typeWeather
    );

    return background?.urlImage;
  };

  return (
    <VStack
      alignItems="start"
      justify="space-between"
      h="100%"
      color="whiteAlpha.900"
      w="full"
      backgroundImage={weathersBackground(weatherData.weather[0].main)}
      backgroundSize='cover'
      p={14}
      borderRadius='md'
    >
      <HStack justify="space-between" w="full">
        <VStack spacing="4px" align="start">
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
        <VStack justify="space-between">
          <Image src={Clouds} boxSize="130px" />
          <Text fontWeight="semibold">{weatherData.weather[0].main}</Text>
        </VStack>
      </HStack>

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
