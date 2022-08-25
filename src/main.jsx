import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <BrowserRouter>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
