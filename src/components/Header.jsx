import {
  Container,
  Box,
  useMediaQuery,
  theme,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(['(min-width: 1280px)']) 
  const [sticky, setSticky] = useState('false');
  
  // window.addEventListener('scroll', () => {
  //   scrollY > 50 ? 
  // })

  return (
    <Box as="header">
      <Container maxW="container.xl" as="nav">
        <HStack justify={ isLargerThan1280 ? 'space-between' : 'end'} paddingY={5}>
          {
            isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />
          }
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
