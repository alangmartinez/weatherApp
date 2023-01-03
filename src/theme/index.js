import { extendTheme } from "@chakra-ui/react";
import { useContext } from "react";
import background from "../assets/images/background.jpg";
import { weatherContext } from "../context/weatherContext";


function getBackground() {
  const { weatherData } = useContext(weatherContext);

  const background = {};
  switch (weatherData.weather[0].main) {
    default:
      return (background.image = "url(../assets/images/background.jpg)");

    case "Clear":
      return (background.image = "url(../assets/images/clear.jpg)");

    case "Clouds":
      return (background.image = "url(../assets/images/clouds.jpg)");

    case "Rain":
      return (background.image = "url(../assets/images/rain.jpg)");
  }
}


const config = {
  fonts: {
    body: "Poppins, sans-serif",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      },
    },
  },
};

const theme = extendTheme(config);

export default theme;
