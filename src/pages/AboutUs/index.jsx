import {
  Grid,
  GridItem,
  AspectRatio,
  Image,
  Text,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
import profile from "../../assets/profile/profile.jpg";

export default function AboutUs({ props }) {
  return (
    <>
      <Grid w="full" templateColumns={"repeat(5, 1fr)"} gap={6}>
        <GridItem colSpan={1}>
          <AspectRatio w={300} h={300} ratio={4 / 3}>
            <Image
              src={profile}
              borderRadius="full"
              boxShadow="dark-lg"
              alt="Alan Martinez"
              objectFit="cover"
            />
          </AspectRatio>
        </GridItem>
        <GridItem
          colSpan={4}
          p={10}
          borderRadius="lg"
          bgColor="whiteAlpha.800"
          backdropFilter="auto"
          backdropBlur="20px"
          boxShadow="dark-lg"
        >
          <VStack align="start">
            <VStack color="blackAlpha.800" spacing={0} marginBottom={2} align='start'>
              <Heading as="h2">Hi!</Heading>
              <Heading as="h2" _after={{ content: "' Alan Martinez'", color: 'blue.500' }}>I'm</Heading>
            </VStack>
            <Text color="blackAlpha.700" fontWeight="medium">
              Welcome to my weather app!
              <br />
              This App was created with the purpose of helping people with their
              travels, as they should anticipate what to wear based on the
              weather in the destination city.
              <br />
              Also this is one of my first projects with React, so I hope you
              like it!
              <br />
              In the footer you can find my social media and my email, feel free
              to contact me!
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
