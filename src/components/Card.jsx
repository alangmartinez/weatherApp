import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Clouds from "../../public/images/icons/clouds.png";

const Card = ({ weatherData }) => {
  const icons = [
    {
      name: "clouds",
      icon: Clouds,
    },
  ];


  return (
    <>
      <VStack
        alignItems="start"
        justify="space-between"
        h="100%"
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
