import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { customTheme, theme } from "./theme";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react";
import { Reset } from "./global/reset";
import { AnnouncementProvider } from "./contexts/announcement.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <ThemeProviderSC theme={customTheme}>
        <ThemeProviderEmotion theme={customTheme}>
          <ChakraProvider theme={theme}>
            <AnnouncementProvider>
              <App />
            </AnnouncementProvider>
          </ChakraProvider>
        </ThemeProviderEmotion>
      </ThemeProviderSC>
    <Reset></Reset>
  </React.StrictMode>
);
