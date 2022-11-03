import { AspectRatio, Grid, GridItem, Image, Button } from "@chakra-ui/react";

const images = [
  {
    name: "London",
    url: "/images/london.jpg",
  },
  {
    name: "Black Man",
    url: "/images/blackman.jpg",
  },
  {
    name: "Woman Making a video",
    url: "/images/womanvideo.jpg",
  },
];

export default function GridComponent() {
  return (
    <Grid
      as="section"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={3}
      w="full"
    >
      <GridItem colSpan={3} rowSpan={3}>
        <AspectRatio ratio={1}>
          <Image
            src={images[0].url}
            alt={images[0].name}
            boxShadow="dark-lg"
            cursor="pointer"
            rounded="2xl"
            _hover={{ transform: "scale(1.025)" }}
            transition="ease 400ms"
          />
        </AspectRatio>
      </GridItem>
      {images.slice(1, 3).map((image, index) => (
        <GridItem key={index} colStart={4} rowStart={index + 1}>
          <AspectRatio ratio={1}>
            <Image
              src={image.url}
              alt={image.name}
              rounded="2xl"
              cursor="pointer"
              objectFit="cover"
              boxShadow="dark-lg"
            />
          </AspectRatio>
        </GridItem>
      ))}
      {images.length >= 2 && (
        <GridItem colStart={4} rowStart={3}>
          <AspectRatio ratio={1}>
            <Button
              variant="unstyled"
              bgColor="gray.100"
              rounded='2xl'
              color='gray.500'
            >
              See more +
            </Button>
          </AspectRatio>
        </GridItem>
      )}
    </Grid>
  );
}
