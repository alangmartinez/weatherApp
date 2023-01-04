import { extendTheme } from "@chakra-ui/react";
import background from "../assets/images/background.jpg";


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
