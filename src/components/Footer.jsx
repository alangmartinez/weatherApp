import { Divider, Stack, Text, VStack, Icon, HStack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const color = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

  return (
    <VStack spacing={10} pb={10} w="full">
      <Divider borderColor={color} w='90%'/>
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
          color={color}
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
        <SocialMedia boxSize={10} />
      </Stack>
      <HStack color={color} divider={<StackDivider />}>
        <HStack>
          <Icon as={BiCopyright} />
          <Text>2022 Developed by Alan Martinez</Text>
        </HStack>
        <Text>All rights reserved</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
