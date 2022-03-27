import { createTheme } from "@mui/material/styles";

const typography = {
  h1: {
    fontSize: "2rem",
    fontWeight: 600,
    margin: "1em 0",
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 500,
    margin: "1em 0",
  },
  subtitle1: {
    fontSize: "0.9rem",
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "0.8rem",
    fontWeight: 300,
  },
  button: {
    fontWeight: 600,
    textTransform: "none",
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#9ccc65",
    },

    background: {
      default: "#ffffff",
      paper: "#e0e0e0",
    },
    text: {
      primary: "rgb(49 49 49 / 87%)",
      secondary: "rgb(147 88 194 / 80%)",
    },
  },
  shape: {
    borderRadius: 0,
  },
  //@ts-ignore
  typography: {
    ...typography,
    subtitle2: {
      ...typography.subtitle2,
      color: "#ffffff73",
    },
  },
});
