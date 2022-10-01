import { Container, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      {favorites.length > 0 ? (
        "Hello"
      ) : (
        <Container
          maxW="400px"
          centerContent
          padding={6}
          backdropFilter='auto'
          backdropBlur='5px'
          bgColor="gray.50"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text as="h2" fontWeight="bold" color='blackAlpha.900'>
            You don't have any favorite yet.
          </Text>
        </Container>
      )}
    </>
  );
};

export default Favorites;
