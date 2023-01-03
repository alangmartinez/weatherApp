import { Divider, Stack, Text, VStack, Icon, HStack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {

  return (
    <VStack spacing={10} pb={10} w="full">
      <Divider w='90%' borderColor='#eaeaea'/>
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
          spacing={4}
          fontWeight='medium'
          color='whiteSmoke'
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
      <HStack divider={<StackDivider />}>
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
