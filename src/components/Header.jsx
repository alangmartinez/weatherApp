import {
  Container,
  Box,
  useMediaQuery,
  theme,
  HStack,
} from "@chakra-ui/react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(['(min-width: 1280px)']) 
  console.log(theme)

  return (
    <Box as="header">
      <Container maxW="container.xl" as="nav">
        <HStack justify={ isLargerThan1280 ? 'space-between' : 'end'}>
          {
            isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />
          }
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
