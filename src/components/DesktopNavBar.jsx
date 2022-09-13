import {
  Button, HStack, Text
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DesktopNavBar() {

  return (
    <>
      <HStack spacing={9}>
        <Text fontWeight="bold" fontSize="3xl">
          Weather App
        </Text>
        <HStack spacing={12} paddingY={3} fontWeight="bold" paddingX={6}>
          <Link to="/">
            <Text cursor="pointer" paddingY={3}>
              Home
            </Text>
          </Link>
          <Link to="/about-us">
            <Text cursor="pointer" paddingY={3}>
              About Us
            </Text>
          </Link>
          <Link to="/favorites">
            <Text cursor="pointer" paddingY={3}>
              Favorites
            </Text>
          </Link>
          <Link to="/help">
            <Text cursor="pointer" paddingY={3}>
              Help
            </Text>
          </Link>
        </HStack>
      </HStack>
      <HStack spacing={7}>
        <Button variant="unstyled">Sign In</Button>
        <Button
          variant="solid"
          boxShadow='sm'
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
