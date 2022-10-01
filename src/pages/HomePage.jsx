import Search from "../components/Search";
import Card from "../components/Card";
import { VStack, Stack, Spinner } from "@chakra-ui/react";
import { useWeatherData } from "../hooks/useWeatherData";

const HomePage = () => {
  const { weatherData, isFetching } = useWeatherData();

  return (
    <VStack w="100%" spacing={20} marginTop={14}>
      <Search />
      <Stack
        justify="center"
        align="center"
        h="450px"
        w="full"
        padding={14}
        bgColor="blackAlpha.600"
        borderRadius="md"
        backdropFilter="auto"
        backdropBlur="5px"
        boxShadow="dark-lg"
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
      </Stack>
    </VStack>
  );
};

export default HomePage;
