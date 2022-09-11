import Search from "../components/Search";
import Card from "../components/Card";
import { VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <VStack w='100%' spacing={20} marginTop={14}>
      <Search />
      <Card />
    </VStack>
  );
};

export default HomePage;
