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

  const weathersBackground = () => {
    if (weatherData.cod === 200) {
      const typeWeather = weatherData.weather[0].main;
      var background = backgrounds.find(
        (background) => background?.weather === typeWeather
      );
    } else {
      background = backgrounds.find(
        (background) => background?.weather === "Clear"
      );
    }
    console.log("background:", background);
    return background?.urlImage;
  };

  return (
    <>
      <VStack
        alignItems="start"
        justify="space-between"
        h="100%"
        color="whiteAlpha.900"
        backgroundColor='blackAlpha.800'
        backdropBlur='.5px'
        backdropFilter='auto'
        p={14}
        borderRadius="md"
      >
        <VStack align="start" justify="center">
          <VStack spacing="4px" align="start">
            <Heading fontSize="3xl" fontWeight="bold">
              {weatherData.name}, {weatherData.sys?.country}
            </Heading>
            <Text fontWeight="bold" fontSize="6xl" margin={0}>
              {weatherData.main?.temp} °C
            </Text>
            <Text fontSize="sm" fontWeight="light">
              Feels Like: {weatherData.main?.feels_like} °C
            </Text>
          </VStack>
          <VStack justify="space-between">
            <Image src={Clouds} boxSize="130px" />
            <Text fontWeight="semibold">
              {weatherData.cod === 200
                ? weatherData.weather[0].description.toUpperCase()
                : "Not Found"}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
