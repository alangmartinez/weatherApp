import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Clouds from "../../public/images/icons/clouds.png";
import { backgrounds } from "../backgrounds";

const Card = ({ weatherData }) => {
  const icons = [
    {
      name: "clouds",
      icon: Clouds,
    },
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
      backgroundImage={weathersBackground(weatherData.weather[0].main)}
      backgroundSize='contain'
      backgroundRepeat="no-repeat"
      p={14}
      borderRadius="md"
    >
      <VStack align="start" justify="center">
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
      </VStack>
    </VStack>
  );
};

export default Card;
