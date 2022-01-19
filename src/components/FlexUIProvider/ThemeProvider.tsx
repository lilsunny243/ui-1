import React from "react";
import { ThemeProvider as $ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStye";
import theme from "../../theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <$ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </$ThemeProvider>
  );
};

export default ThemeProvider;
