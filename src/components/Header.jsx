import { Box, Container, HStack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const [bgColor, setBgColor] = useState("transparent");

  function handleScroll() {
    const nav = document.querySelector("header");
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;

    scrollHeight > navHeight
      ? setBgColor("#1314153b")
      : setBgColor("transparent");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      backdropFilter='auto'
      backdropBlur='5px'
      w="full"
      zIndex="sticky"
      bgColor={bgColor}
    >
      <Container maxW="container.xl" as="nav">
        <HStack justify="space-between" paddingY={5}>
          {isLargerThan1280 ? <DesktopNavBar /> : <MobileNavBar />}
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
