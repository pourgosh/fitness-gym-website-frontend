import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#D9D9D9",
      sub: "#212121",
    },
    secondary: {
      main: "#121212",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      between: 600,
      md: 800,
      lg: 1100,
      xl: 1400,
      xxl: 1500,
    },
  },
  typography: {
    fontFamily: ["titleFont", "textFont"],

    h1: {
      fontFamily: "titleFont",
      fontSize: "1rem",
      fontWeight: 500,
      "@media (min-width:500px)": {
        fontSize: "1.3rem",
        fontWeight: 700,
      },
      "@media (min-width:1100px)": {
        fontSize: "1.6rem",
        fontWeight: 700,
      },
    },
    string: {
      fontFamily: "textFont",
      fontSize: "0.8rem",
      "@media (min-width:500px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1100px)": {
        fontSize: "1.4rem",
      },
    },
    list: {
      fontFamily: "textFont",
      fontSize: "0.6rem",
      "@media (min-width:500px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:1100px)": {
        fontSize: "1.2rem",
      },
    },
  },
});
