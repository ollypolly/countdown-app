import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { darkTheme } from "./theme";

export function SiteTheme({ children }: PropsWithChildren<any>) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
