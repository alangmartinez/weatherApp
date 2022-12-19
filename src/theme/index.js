import { extendTheme } from "@chakra-ui/react";

const config = {
  fonts: {
    body: "Poppins, sans-serif",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  // styles: {
  //   global: {
  //     body: {
  //       background: "url(/images/background.jpeg)",
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //       height: "100%",
  //       minHeight: "100vh",
  //     },
  //   },
  // },
};

const theme = extendTheme(config);

export default theme;
