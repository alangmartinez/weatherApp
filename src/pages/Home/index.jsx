import { VStack } from "@chakra-ui/react";
import GridComponent from '../../components/GridComponent';
import Weather from '../../components/Weather';

const HomePage = () => {

  return (
    <VStack w="100%" spacing={20} marginTop={14}>
      <Weather/>
      <GridComponent/>
    </VStack>
  );
};

export default HomePage;
