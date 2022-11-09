import Search from "../components/Search";
import Card from "../components/Card";
import GridComponent from '../components/GridComponent';
import { VStack, Box, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { weatherContext } from "../context/weatherContext";

const HomePage = () => {
  const { weatherData, isFetching } = useContext(weatherContext);

  console.log(weatherData);

  return (
    <VStack w="100%" spacing={20} marginTop={14}>
      <Search />
      <Box
        h="600px"
        w='400px'
        boxShadow="dark-lg"
        borderRadius='lg'
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
          <Card weatherData={weatherData}/>
        )}
      </Box>
      <GridComponent/>
    </VStack>
  );
};

export default HomePage;
