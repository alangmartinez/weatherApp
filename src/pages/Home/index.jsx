import { VStack } from "@chakra-ui/react";
import Weather from "../../components/Weather";
import AboutUs from "../../pages/AboutUs";

const HomePage = () => {
  return (
    <VStack spacing={20}>
      <Weather />
      <AboutUs />
    </VStack>
  );
};

export default HomePage;
