import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ChakraProvider>
);
