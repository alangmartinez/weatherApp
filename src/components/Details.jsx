import { Stack, VStack, Text, StackDivider, useMediaQuery } from "@chakra-ui/react";

export default function Details({ tempMax, tempMin, windSpeed, humidity }) {
  const [desktop] = useMediaQuery(['(min-width: 1280px)'])

  return (
    <Stack
    direction={desktop ? 'row' : 'column'}
    align='center'
    justify='center'
      divider={
        <StackDivider h="70%" alignSelf="center" borderColor="gray.300" />
      }
      spacing={7}
    >
      <VStack>
        <Text fontSize="2xl" fontWeight="black">
          {tempMin} °C
        </Text>
        <Text fontSize="sm">Temp Min</Text>
      </VStack>
      <VStack>
        <Text fontSize="2xl" fontWeight="black">
          {tempMax} °C
        </Text>
        <Text fontSize="sm">Temp Max</Text>
      </VStack>
      <VStack>
        <Text fontSize="2xl" fontWeight="black">
          {humidity} %
        </Text>
        <Text fontSize="sm">Humidity</Text>
      </VStack>
      <VStack>
        <Text fontSize="2xl" fontWeight="black">
          {windSpeed} KpH
        </Text>
        <Text fontSize="sm">Wind Speed</Text>
      </VStack>
    </Stack>
  );
}
