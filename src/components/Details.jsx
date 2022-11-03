import { Stack, VStack, Text, StackDivider } from "@chakra-ui/react";

export default function Details({ tempMax, tempMin, windSpeed, humidity }) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      divider={
        <StackDivider h="70%" alignSelf="center" borderColor="gray.300" />
      }
      spacing={7}
    >
      <VStack
        bgColor="whiteAlpha.400"
        borderRadius="md"
        backdropFilter="auto"
        backdropBlur="4px"
        p={7}
        minW='120px'
      >
        <Text fontSize="2xl" fontWeight="black">
          {tempMin} °C
        </Text>
        <Text fontSize="sm">Temp Min</Text>
      </VStack>
      <VStack
        bgColor="whiteAlpha.400"
        borderRadius="md"
        backdropFilter="auto"
        backdropBlur="4px"
        p={7}
        minW='120px'
      >
        <Text fontSize="2xl" fontWeight="black">
          {tempMax} °C
        </Text>
        <Text fontSize="sm">Temp Max</Text>
      </VStack>
      <VStack
        bgColor="whiteAlpha.400"
        borderRadius="md"
        backdropFilter="auto"
        backdropBlur="4px"
        p={7}
        minW='120px'
      >
        <Text fontSize="2xl" fontWeight="black">
          {humidity} %
        </Text>
        <Text fontSize="sm">Humidity</Text>
      </VStack>
      <VStack
        bgColor="whiteAlpha.400"
        borderRadius="md"
        backdropFilter="auto"
        backdropBlur="4px"
        p={7}
        minW='120px'
      >
        <Text fontSize="2xl" fontWeight="black">
          {windSpeed} KpH
        </Text>
        <Text fontSize="sm">Wind Speed</Text>
      </VStack>
    </Stack>
  );
}
