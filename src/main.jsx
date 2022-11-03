import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme/index";
import WeatherProvider from "./context/weatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider resetCSS theme={theme}>
    <BrowserRouter>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </BrowserRouter>
  </ChakraProvider>
);
