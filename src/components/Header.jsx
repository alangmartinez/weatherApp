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
      ? setBgColor("#13141535")
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
      backdropFilter={bgColor === "transparent" ? "none" : "blur(5px)"}
      backdropBlur={bgColor === "transparent" ? "none" : "blur(5px)"}
      boxShadow={bgColor === "transparent" ? "none" : "lg"}
      w="full"
      zIndex="sticky"
      bgColor={bgColor}
      transition="all .35s ease-in-out"
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
