import {
  Grid,
  GridItem,
  AspectRatio,
  Image,
  Text,
  Heading,
  VStack
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
          bgColor="blackAlpha.800"
          backdropFilter="auto"
          backdropBlur="20px"
          boxShadow="dark-lg"
        >
          <VStack align='start'>
            <Heading as="h2" color="whitesmoke">
              Hi!
              <br />
              I'm Alan Martinez
            </Heading>
            <Text color='whiteAlpha.800' fontWeight="medium">
              Welcome to my weather app!
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}
