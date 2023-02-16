import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import themeChakra from "./theme/chakra";
import themeSC from "./theme/sc"
import { ThemeProvider } from "styled-components";
import { Reset } from "./global/reset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeChakra}>
      <ThemeProvider theme={themeSC}>
        <App/>
      </ThemeProvider>
    </ChakraProvider>
    <Reset></Reset>
  </React.StrictMode>
);
