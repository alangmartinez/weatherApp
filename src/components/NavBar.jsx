import { HStack, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar({ color }) {
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Favorites",
      path: "/favorites",
    },
    {
      name: "Help",
      path: "/help",
    },
  ];

  return (
    <HStack spacing={9} color={color}>
      <Link to="/">
        <VStack spacing={0} lineHeight="2rem">
          <Text fontWeight="bold" fontSize="3xl">Weather App</Text>
          <Text>insert Logo here</Text>
        </VStack>
      </Link>
      <HStack spacing={12} paddingY={3} fontWeight="semibold" paddingX={6}>
        {pages.map((page) => (
          <Button variant="ghost" key={page.name} size="lg">
            <Link to={page.path}>{page.name}</Link>
          </Button>
        ))}
      </HStack>
    </HStack>
  );
}
