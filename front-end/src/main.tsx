import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import themeChakra from "./theme/chakra";
import themeSC from "./theme/sc"
import {ThemeProvider as ThemeProviderSC} from "styled-components";
import {ThemeProvider as ThemeProviderEmotion} from "@emotion/react"
import { Reset } from "./global/reset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeChakra}>
      <ThemeProviderSC theme={themeSC}>
        <ThemeProviderEmotion theme={themeSC}>
          <App/>
        </ThemeProviderEmotion>
      </ThemeProviderSC>
    </ChakraProvider>
    <Reset></Reset>
  </React.StrictMode>
);
