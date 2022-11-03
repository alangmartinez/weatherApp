import { Divider, Stack, Text, VStack, Icon, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <VStack spacing={10} pb={10} w="full">
      <Divider borderColor="whiteAlpha.900" />
      <Stack
        spacing={{ base: 12 }}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        alignItems="center"
        w="full"
        paddingX={6}
      >
        <VStack
          align={{ base: "center", md: "start" }}
          fontSize={19}
          spacing={2}
        >
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/about-us">
            <Text>About Us</Text>
          </Link>
          <Link to="/favorites">
            <Text>Favorites</Text>
          </Link>
          <Link to="/help">
            <Text>Help</Text>
          </Link>
        </VStack>
        <SocialMedia boxSize={8} />
      </Stack>
      <HStack>
        <Icon as={BiCopyright} />
        <Text _before={{ content: "'2022 '", color: "telegram.500" }}>
          Developed by Alan Martinez
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
