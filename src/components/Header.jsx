import { Box, Container, HStack, useMediaQuery } from "@chakra-ui/react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);


  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      w="full"
      zIndex="sticky"
    >
      <Container maxW="container.xl" as="nav">
        <HStack
          justify='space-between'
          paddingY={5}
        >
          {isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />}
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
