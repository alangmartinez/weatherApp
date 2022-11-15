import { Box, Container, HStack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY >= 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <Box
      as="header"
      backdropFilter="auto"
      backdropBlur="5px"
      transition="ease 400ms"
      bgColor={sticky ? "whiteAlpha.300" : "transparent"}
      position="sticky"
      top={0}
      w="full"
      boxShadow={sticky ? "sm" : ""}
      zIndex="sticky"
    >
      <Container maxW="container.xl" as="nav">
        <HStack
          justify={isLargerThan1280 ? "space-between" : "end"}
          paddingY={5}
        >
          {isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />}
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
