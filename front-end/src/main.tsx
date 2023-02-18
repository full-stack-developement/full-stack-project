import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { customTheme } from "./theme";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react";
import { Reset } from "./global/reset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ThemeProviderSC theme={customTheme}>
        <ThemeProviderEmotion theme={customTheme}>
          <App />
        </ThemeProviderEmotion>
      </ThemeProviderSC>
    </ChakraProvider>
    <Reset></Reset>
  </React.StrictMode>
);
