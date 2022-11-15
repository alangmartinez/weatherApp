import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

export default function DesktopNavBar() {
  return (
    <>
      <HStack spacing={9}>
        <Text fontWeight="bold" fontSize="3xl">
          Weather App
        </Text>
        <HStack spacing={12} paddingY={3} fontWeight="semibold" paddingX={6}>
          <Link to="/">
            <Button variant="ghost" fontSize={18}>
              Home
            </Button>
          </Link>
          <Link to="/about-us">
            <Button variant="ghost" fontSize={18}>
              About Us
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" fontSize={18}>
              Favorites
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="ghost" fontSize={18}>
              Help
            </Button>
          </Link>
          <IconButton icon={<IoMoon />} />
        </HStack>
      </HStack>
      <HStack spacing={8}>
        <Button variant="unstyled">Log In</Button>
        <Button
          boxShadow="md"
          colorScheme="facebook"
          size="lg"
          rightIcon={<FaArrowRight />}
        >
          Sign Up
        </Button>
      </HStack>
    </>
  );
}
