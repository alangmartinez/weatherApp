import { Box, Container, HStack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [isLargerThan1280] = useMediaQuery(["(min-width: 1280px)"]);
  const [bgColor, setBgColor] = useState("transparent");

  const color = bgColor === "transparent" ? "blackAlpha.900" : "whiteAlpha.900";

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


  // Making API call to get weather forecast
  const API_KEY = '52488d5258053055db46f733faa00580';

  function getWeatherForecast () {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  }

  useEffect(() => {
    getWeatherForecast();
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
          {isLargerThan1280 ? <DesktopNavBar color={color} /> : <MobileNavBar />}
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
