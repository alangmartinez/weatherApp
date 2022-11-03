import Search from "../components/Search";
import Card from "../components/Card";
import GridComponent from '../components/GridComponent';
import { VStack, Box, Spinner } from "@chakra-ui/react";
import { useWeatherData } from "../hooks/useWeatherData";

const HomePage = () => {
  const { weatherData, isFetching } = useWeatherData();

  return (
    <VStack w="100%" spacing={20} marginTop={14}>
      <Search />
      <Box
        h="450px"
        w="full"
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
      </Box>
      <GridComponent/>
    </VStack>
  );
};

export default HomePage;
