import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const menu = ["Home", "About us", "Favorites", "Help"];

  return (
    <Box
      bgColor="blackAlpha.700"
      backdropFilter="auto"
      backdropBlur="4px"
      position="absolute"
      bottom={0}
      left={0}
      w="full"
      paddingX={20}
      paddingY={10}
      zIndex={0}
    >
      <HStack justify='space-between' align='start'>
        <VStack spacing={3} color="white" fontWeight="semibold" align="start">
          {menu.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
        </VStack>
        <SocialMedia />
      </HStack>
      <VStack spacing={0} justify="center">
        <Text
          textAlign="center"
          fontWeight="light"
          _after={{
            content: `' Alan Martinez'`,
            color: "yellow.400",
            fontWeight: "semibold",
          }}
        >
          Designed by
        </Text>
        <Text>All Rigths Reserverd</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
