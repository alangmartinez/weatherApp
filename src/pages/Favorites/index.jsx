import { Container, Text, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      name: 'Buenos Aires',
      country: 'Argentina',
      id: 1,
    },
    {
      name: 'Paris',
      country: 'France',
      id: 2,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      id: 3,
    }
  ]);

  return (
    <>
      <HStack justify="end">
        <Button
          colorScheme="green"
          leftIcon={<RiAddLine />}
          size="lg"
          boxShadow="dark-lg"
        >
          Add Favorite
        </Button>
      </HStack>
      {favorites.length > 0 ? (
        <HStack justify='space-around' w='full' spacing={4}>
          {favorites.map((favorite) => (
            <Container
              key={favorite.id}
              centerContent
              padding={6}
              backdropFilter="auto"
              backdropBlur="5px"
              bgColor="whiteAlpha.700"
              borderRadius="lg"
              boxShadow="lg"
            >
              <Text as="h2" fontWeight="bold" color="blackAlpha.900">
                {favorite.name}
              </Text>
              <Text as="h3" fontWeight="bold" color="blackAlpha.900">
                {favorite.country}
              </Text>
            </Container>
          ))}
        </HStack>
      ) : (
        <Container
          maxW="400px"
          centerContent
          padding={6}
          backdropFilter="auto"
          backdropBlur="5px"
          bgColor="gray.50"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text as="h2" fontWeight="bold" color="blackAlpha.900">
            You don't have any favorite yet.
          </Text>
        </Container>
      )}
    </>
  );
};

export default Favorites;
