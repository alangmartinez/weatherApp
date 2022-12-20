import { extendTheme } from "@chakra-ui/react";

const config = {
  fonts: {
    body: "Poppins, sans-serif",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  //  styles: {
  //    global: {
  //      body: {
  //       backgroundColor: "#131415",
  //      },
  //    },
  //  },
};

const theme = extendTheme(config);

export default theme;
