import { Button, HStack, IconButton, Text, theme } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

export default function DesktopNavBar() {
  return (
    <>
      <HStack spacing={9}>
        <Text fontWeight="bold" fontSize="3xl">
          Weather App
        </Text>
        <HStack spacing={12} paddingY={3} fontWeight="bold" paddingX={6}>
          <Link to="/">
            <Button variant="ghost">
              Home
            </Button>
          </Link>
          <Link to="/about-us">
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost">Favorites</Button>
          </Link>
          <Link to="/help">
            <Button variant="ghost">Help</Button>
          </Link>
          <IconButton icon={IoMoon} />
        </HStack>
      </HStack>
      <HStack spacing={7}>
        <Button variant="unstyled">Sign In</Button>
        <Button
          variant="solid"
          boxShadow="sm"
          bgColor="#23A6F0"
          color="whitesmoke"
          size="lg"
          borderRadius="sm"
          rightIcon={<FaArrowRight />}
        >
          Register
        </Button>
      </HStack>
    </>
  );
}
